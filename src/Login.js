// src/pages/Login.js
import React, { useState } from 'react';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    console.log('Login data:', credentials);
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
        <p className="login-link">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </section>
  );
}

export default Login;
