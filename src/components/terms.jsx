import React, { useState, useEffect } from 'react'
import { HomeHeader } from './HomeHeader'
import AppContext from '../context/AppContext'


export const TermsPage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTab, setselectedTab] = useState(0);
  const myContext = React.useContext(AppContext);
  const { datas} = myContext;

  return (
    <>
    
      <div id='__next'>
        <div className='__variable_43de4e'>
          <HomeHeader />
          <main className='w-full p-2 lg:w-full lg:p-4 lg:mx-auto xl:p-0 xl:w-[1200px]'>
            <section className="mt-2 mb-4 font-body ">
              <div className="">
                <h1 className="text-2xl uppercase bold">Terms of Service</h1>
                
              </div>
              <div className='max-h-80 overflow-auto' dangerouslySetInnerHTML={{__html :datas.web.pages.terms }} />
            </section>
             
          </main>
          <footer className='bg-gray-200 mt-52 flex justify-between p-10'>
            <p>©️ {datas.web.siteName}</p>
            <a href="#" className='hover:opacity-50 duration-250'>Terms of Service</a>
          </footer>
        </div>
      </div>

     
    </>
  )
}
