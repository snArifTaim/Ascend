import React, { useState } from 'react';
import logo from '../../assets/logo.svg'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform login validation
    if (email === 'admin@gmail.com' && password === 'admin4521') {
      // Successful login
      setError('');
      // TODO: Redirect or perform further actions
      window.location.href = '/auth/select';
      
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div id='__next'>
      <div className='__variable_43de4e'>
        {/* <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div> */}
        <div className='h-[100vh] w-full flex justify-center align-center '>
          <form onSubmit={handleLogin} className='text-sm flex w-96 flex-col justify-center h-full space-y-2'>
            <img className='w-40 mx-auto invert mb-10' src={logo} alt="logo" />
            <h1 className='font-body mb-2 uppercase bold'>Email</h1>
            <input
              placeholder='Enter your email'
              type="email"
              id="email"
              value={email}
              onChange={handleemailChange}
              required
              className='text-sm w-full p-2 placeholder:text-gray-400 placeholder:font-base border-2 bg-white' />
            <h1 className='font-body mb-2 uppercase bold'>Password</h1>
            <input
              placeholder='Enter your password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className='text-sm w-full p-2 placeholder:text-gray-400 placeholder:font-base border-2 bg-white' />
            <button className='p-2 px-4 bg-primary text-white font-body mt-2' type="submit">Login</button>
            {error &&
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
              </div>
            }

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
