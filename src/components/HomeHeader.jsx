import React from 'react'
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const HomeHeader = () => {
  const navigate= useNavigate();
  
  const myContext = React.useContext(AppContext);
  const { datas, dispatch} = myContext;
   
  
  return (
    <div className='bg-white mb-2 xl:mb-8'>
        <div className='flex justify-between w-full lg:w-full lg:mx-auto xl:p-0 xl:w-[1200px]' onClick={() =>{
          navigate('/')
        }}>
            <img className='w-52 p-3 -ml-2 xl:-ml-6' src={datas.web.logoUrl} alt="logo" />
            {/* <button className='text-sm font-body text-primary ml-2 uppercase hover:opacity-50 mr-2' onClick={() =>{
              localStorage.removeItem('isLogged');
              localStorage.removeItem('hash');
              dispatch({ type: "login", login_data: null });
              navigate('/'); 
            }}>Log out</button> */}
        </div>
    </div>
  )
}
