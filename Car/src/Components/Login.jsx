import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted!', { email, password });
    // You can send the login data to your backend or perform other actions
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input 
            type='email' 
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Password</label>
          <input 
            type='password' 
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
