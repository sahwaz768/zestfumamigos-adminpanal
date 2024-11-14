import { useState } from "react";

const Adminlogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateForm = () => {
      const validationErrors = {};
  
      if (!email) {
        validationErrors.email = "Email is required";
      } else if (!validateEmail(email)) {
        validationErrors.email = "Invalid email format";
      }
  
      if (!password) {
        validationErrors.password = "Password is required";
      } else if (password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
      }
  
      setErrors(validationErrors);
  
      return Object.keys(validationErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Submit the form data (for example, send to an API)
        console.log({ email, password });
      }
    };
  return (
    <>
    <div className="loginbox">
      <div className="leftbox">
        <h1 className="zestful">zestful amigos</h1>
      </div>
      <div className="rightbox">
        <h1 className="zestful zestnone">zestful amigos</h1>
        <div className="logindetail">
          <div>
            <h5 >Welcome</h5>
            <p>PlEASE LOGIN TO ADMIN DASHBOARD</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="lginputbox">
                

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="lginputfield"
                />
                <br/>
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>
              <div className="lginputbox">
                
                
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="lginputfield"
                />
                <br/>
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </div>
              <button type="submit" className="lgbtn">Login</button>
            </form>
            <p className="forgotpass">forgot password ?</p>
          </div>
        </div>{" "}
      </div>
    </div>
  </>
  )
}

export default Adminlogin
