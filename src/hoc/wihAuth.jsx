/* eslint-disable react/display-name */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_LOC } from "../Constants/common.constants";
import { useDispatch, useSelector } from "react-redux";
import { decodeAccessToken } from "../utils/common.utils";
import { datafetched } from "../Redux/auth/auth.reducer";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tokenredux = useSelector((state) => state.AuthReducer.data);
    useEffect(() => {
      const token = Cookies.get(ACCESS_TOKEN_LOC);
      if (!token && (!tokenredux || tokenredux.role !== "ADMIN")) {
        navigate("/", { replace: true });
      } else if (!tokenredux) {
        dispatch(datafetched(decodeAccessToken(token)));
      }
    }, [navigate, tokenredux, dispatch]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
