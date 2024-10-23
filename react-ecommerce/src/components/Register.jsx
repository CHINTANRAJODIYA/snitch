import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = 'First name is required';
    if (!formData.last_name) newErrors.last_name = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert(Object.values(validationErrors).join('\n'));  // Display validation errors as an alert
      return;
    }

    try {
      // Send a POST request to the backend API
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });

      const data = await response.json();

      if (response.ok) {
        // If registration is successful, store user ID and navigate
        localStorage.setItem('userId', data.data.id); // Assuming response contains the user ID
        alert("Registration successful!");  // Show success message in alert
        navigate('/login');
      } else {
        // If registration fails, display error message using alert
        const errorMessage = data.message || "Registration failed. Please try again.";
        setErrors({ general: errorMessage });
        alert(errorMessage);  // Display error message as an alert
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert("An error occurred during registration. Please try again later."); // Display a general error message in case of exception
    }
  };

  return (
    <>
      <div className="Register d-flex flex-column align-items-center mx-auto w-100">
        <div className="auth-title text-center pt-5">
          <h1>Register Your Profile</h1>
        </div>

        <form onSubmit={handleSubmit} className="auth-input w-100">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="phone_number">
              Phone Number <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              name="phone_number"
              className="form-control"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="text-center pt-4 opacity-50">or</p>

        <div className="d-flex justify-content-between w-100 pt-3">
          <div className="google w-50 me-2">
            <button className="btn btn-light w-100 d-flex align-items-center justify-content-center border">
              Register With Google
            </button>
          </div>
          <div className="facebook w-50 ms-2">
            <button className="btn btn-light w-100 d-flex align-items-center justify-content-center border">
              Register With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
