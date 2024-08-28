import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Ensure the path is correct

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
      navigate.push('/general-pages/signin'); // Redirect after successful registration
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div>
      <div className="az-signup-wrapper">
        <div className="az-column-signup-left">
          <div>
            <i className="typcn typcn-chart-bar-outline"></i>
            <h1 className="az-logo">Ra<span>p</span>tor</h1>
            <h5>Vulnerability Dashboard </h5>
          </div>
        </div>
        <div className="az-column-signup">
          <h1 className="az-logo">Ra<span>p</span>tor</h1>
          <div className="az-signup-header">
            <h2>Get Started</h2>
            <h4>It's free to signup and only takes a minute.</h4>

            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label>Firstname &amp; Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your firstname and lastname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <button type="submit" className="btn btn-az-primary btn-block">Create Account</button>
            </form>
            <div className="az-signup-footer">
              <p>Already have an account? <Link to="/general-pages/signin">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
