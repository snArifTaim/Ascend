import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/login';
import { HomePage } from './components/home';
import { Select } from './components/Select';
import axios from 'axios'; 

import AppContext from './context/AppContext';
import {reducer, initialState} from './context/reducer'
import { TermsPage } from './components/terms';

function AppRouter() {

    
  const BASE_URL = window.BASE_URL;
  const logoUrl = window.logoUrl;
  const [isRout, setIsRout] = React.useState(false);
  const [stdatas, dispatch] = React.useReducer(reducer, initialState);
  const isLogged = React.useCallback(() => {
    
    if(stdatas.login == null) return false;
    if(typeof stdatas.login.isLogged != 'boolean') return false;
    return stdatas.login.isLogged;
  }, [
    stdatas
  ]);

  const checkLoginStatus = () =>{
    // if(!isRout) {setIsRout(true);}
    return;
    let isLog= localStorage.getItem('isLogged');
    let hash= localStorage.getItem('hash');
    if(isLog == null && hash == null){ 
        if(!isRout) {setIsRout(true);}
      return;
    }

    let config = {
      headers:{
        "token":hash,
      }}; 
    axios.get(BASE_URL+ '/api/me', config).then(({data})=> {
      
        if(!isRout) {setIsRout(true);}
      // console.log(data);
      if(data.status){
        dispatch({ type: "login", login_data: { isLogged: true, ...data} });
      }else{ 
      }
    }).catch(e =>{
        
        setTimeout( () =>{
            document.location.reload();
        } , 2000);

        if(!isRout) {setIsRout(true);}
        
    });
  };

 const alldataGet = () => {

    // let isLog= localStorage.getItem('isLogged');
    // let hash= localStorage.getItem('hash');
    // if(isLog == null && hash == null){
    //   return;
    // }

    let config = {
      headers:{
        // "token":hash,
      }}; 
    axios.get(BASE_URL+ '/apiu/datas', config).then(({data})=> {
       if(data.status){
        
        dispatch({ type: "set_data", data:  data});
        setIsRout(true);
 
       }
    }).catch(e =>{    
    });

    
    
  } ;

  const checkLogin = () =>{
    // setIsRout(true);
    return;
    let isLog= localStorage.getItem('isLogged');
    let hash= localStorage.getItem('hash');
    if(isLog !== null && hash !== null){
      checkLoginStatus();
    }else{
        
        if(!isRout) {setIsRout(true);}
    }
  }
  const webStatus = () =>{

    axios.get(BASE_URL+ '/apiu/status').then(({data})=> {
       
      if(data.status){
        dispatch({ type: "set_web", web: data });
        setIsReady(true);
          

      }else{
        // document.location.reload();
      }
    }).catch(e =>{
        setTimeout( () =>{
            document.location.reload();
        } , 2000);
    });
  };

  const getLoad = () =>{
    webStatus();
  };

  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    // first initial load 
    getLoad();
    // checkLogin();
    alldataGet();
    return () => {
      
    }
  }, []);
  
  const userSettings = {
    datas: stdatas,
    dispatch,
    isLogged,
    checkLogin,
    webStatus
  };
  if(!isReady || !isRout){
    return <>
    <div
    
    style={{

      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}


>
      <img src={logoUrl} height={80}/>
      <p style={{
        fontSize:'large',
        fontWeight:'600'
      }}>Loading...</p>


    </div>
    </>
  }



    return (
        
      <AppContext.Provider value={userSettings}>
        
        <BrowserRouter>
            <Routes>
              
            <Route path="/" element={<HomePage />} />

            {/* {isLogged() ? (<>
                <Route path="/" element={<HomePage />} />
                <Route exact path="/auth/select" element={<Select />} />
                </> ) :( <>
                <Route exact path="/" element={<LoginPage />} />
                </>)} */}
                
                <Route exact path="/tos" element={<TermsPage />} />

            </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    );
}

export default AppRouter;
