import axios from "axios";
import cookie from "js-cookie";
import {
  ACCESS_TOKEN_LOC,
  REFRESH_TOKEN_LOC,
} from "src/Constants/common.constants";
import { decodeAccessToken } from "src/utils/common.utils";
import { removeUserData } from "src/utils/removeUserData";
import { BASEURL, ignoretokenpaths } from "src/Constants/services.constants";
// import { getAccessTokenFromRefreshTokenDto, ProcessQueDto } from "../dto/interface.ques.dto";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axios.interceptors.request.use((config) => {
  const token = cookie.get(ACCESS_TOKEN_LOC);
  if (token) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axios.defaults.headers.common = {
  "Cache-Control":
    "no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const onrequest = err.config;
    const token = cookie.get(ACCESS_TOKEN_LOC);
    if (!err.response?.config?.url?.includes(ignoretokenpaths) && !token) {
      return Promise.reject(err);
    }
    if (
      (err?.response?.config?.url === BASEURL + "auth/refreshtoken" &&
        err?.response?.status >= 400 &&
        err?.response?.status < 500) ||
      err?.response?.status === 401 ||
      !token
    ) {
      await removeUserData();
      window.location = "/login";
    }
    const refreshToken = cookie.get(REFRESH_TOKEN_LOC);
    let exp = null;
    if (token) {
      const { decodedToken } = decodeAccessToken(token);
      if (decodedToken) {
        exp = decodedToken.exp;
      }
    }
    if (
      token &&
      refreshToken &&
      exp &&
      exp < Date.now() / 1000 &&
      !onrequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((tokens) => {
            if (onrequest.headers) {
              onrequest.headers.Authorization = "Bearer " + tokens;
            }
            return axios(onrequest);
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      }
      onrequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        const setRefUrl = BASEURL + "auth/refreshtoken";
        axios
          .post(setRefUrl, {
            refresh_token: refreshToken,
          })
          .then(({ data }) => {
            const access_token = data.access_token;
            axios.defaults.headers.common.Authorization =
              "Bearer " + access_token;
            cookie.set(ACCESS_TOKEN_LOC, access_token);
            processQueue(null, access_token);
            resolve(axios(onrequest));
          })
          .catch(async (error) => {
            await removeUserData();
            window.location = "/login";
            processQueue(error, null);
            reject(error);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(err);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  del: axios.delete,
};
