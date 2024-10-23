import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError(null);
    setPasswordError(null);
    setLoginError(null);

    // Basic validation
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (!email || !password) return; // Stop submission if there are validation errors

    try {
      // Fetch login API from the backend
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password as JSON
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // If login is successful, store token and navigate to the dashboard
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/"); // Redirect to the homepage or dashboard after login
      } else {
        // If login fails, show error message using alert
        const errorMessage = data.status || "Login failed. Please check your email and password.";
        setLoginError(errorMessage);
        alert(errorMessage); // Display the error in an alert
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again later.");
      alert("An error occurred. Please try again later.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="row w-100">
        <div className="col-lg-3 d-none d-lg-block">
          {/* You can add an image here for login illustration */}
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h4 className="text-center pb-4">Welcome back! Please <br /> login to your account</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className={`form-control ${emailError ? "is-invalid" : ""}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`form-control ${passwordError ? "is-invalid" : ""}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            </div>
            {loginError && <div className="alert alert-danger">{loginError}</div>}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ms-2">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>
          <div className="text-center mb-3">
            <p>
              Don't have an account? 
              <Link to="/register" className="text-primary ms-2">Register</Link>
            </p>
          </div>
          <p className="text-center pt-4 opacity-50">or</p>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-light d-flex align-items-center">
              {/* Replace with your Google icon */}
              Sign in With Google
            </button>
            <button className="btn btn-light d-flex align-items-center">
              {/* Replace with your Facebook icon */}
              Sign in With Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
