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
    console.log('Login submitted!', { email, password });
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      <div className="m-4">
        <img src="https://i.pinimg.com/736x/e7/b9/e8/e7b9e836173bdbcae09013e3ee7003f3.jpg" alt="Car" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"/>
      </div>
      <div className="m-4 p-4 bg-white shadow-lg rounded-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
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
    </div>
  );
}

export default Login;
