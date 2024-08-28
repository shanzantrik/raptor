import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
      navigate.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to sign in. Please check your credentials and try again.");
    }
  };

  return (
    <div className="az-signin-wrapper">
      <div className="az-card-signin">
        <h1 className="az-logo">Ra<span>p</span>tor</h1>
        <div className="az-signin-header">
          <h2>Welcome back!</h2>
          <h4>Please sign in to continue</h4>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="btn btn-az-primary btn-block">Sign In</button>
          </form>
        </div>
        <div className="az-signin-footer">
          {/* <p><a href="#/">Forgot password?</a></p> */}
          <p>Don't have an account? <Link to="/general-pages/signup">Create an Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
