import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const myContext = React.useContext(AppContext);
  const { datas, dispatch,checkLogin} = myContext;
  
  const BASE_URL = window.BASE_URL; 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [isLoading, setisLoading] = useState(false); 

  
const showError = (msg) =>{
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

const showSucess= (msg) =>{
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
}



  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    setisLoading(true);
    e.preventDefault();
    if(email.length == 0 || password.length ==0){
       setisLoading(false);
      showError("Check your Email or password!");
      return;
    }
     

 
      axios.post(BASE_URL+ '/apiu/login', {
        username: email,
        password : password
      }, {
        params: {
          
        }
      }).then(({data})=> {
        setisLoading(false);
        if(data.status){ 
          
        localStorage.setItem('isLogged', true);
        localStorage.setItem('hash', data.data.session);
        showSucess("Successfully Logged In!");
        setTimeout(() => {
          
        dispatch({ type: "login", login_data: { isLogged: true, ...data} });
        checkLogin();
          navigate('/');
          
        },1500);
 

        }else{
          showError(data.msg);
        return;
        }
     
      }).catch(e =>{
        console.log(e);
        showError("Something is wrong with your connection!");
        setisLoading(false);
      });
  
      
    
  };

 


  return (<>
    <div id='__next'>
      <div className='__variable_43de4e'> 
        <div className='h-[100vh] w-full flex justify-center align-center '>
          <form onSubmit={handleLogin} className='text-sm flex w-96 flex-col justify-center h-full space-y-2'>
            <img className='w-40 mx-auto  mb-10' src={datas.web.logoUrl} alt="logo" />
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
            <button className='p-2 px-4 bg-primary text-white font-body mt-2' type="submit" style={{ opacity : isLoading ? 0.5 : 1 }} disabled={isLoading}>{isLoading ? 'Logging..' :'Login'}</button>
           

          </form>
        </div>
      </div>
    </div>
    
    <ToastContainer/>

    </>
  );
};

export default LoginPage;
