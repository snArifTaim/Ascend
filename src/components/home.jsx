import React, { useState, useEffect } from 'react'
import Popup from './popup'
import { HomeHeader } from './HomeHeader'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { AllPublications } from './category/allPublication'
import { Tv } from './category/Tv'
import { Listicles } from './category/Listicles'
import { BestSeller } from './category/BestSeller'
import Misc from './category/Misc'
import { PRBundles } from './category/PRBundles'


export const HomePage = () => {

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Delay in milliseconds before showing the popup
    const delay = 1;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <Popup onClose={handleClosePopup} />
      )}
      <div id='__next'>
        <div className='__variable_43de4e'>
          <HomeHeader />
          <main className='w-full p-2 lg:w-full lg:p-4 lg:mx-auto xl:p-0 xl:w-[1200px]'>
            <section className="mt-2 mb-4 flex-col font-body space-y-3 flex lg:space-y-0 lg:items-center lg:flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="text-2xl uppercase bold">Pricing sheet (Ascend)</h1>
                <p className="text-sm">Once we have published the article for you, any further edits may include an extra charge.</p>
              </div>
              <div className="flex space-x-2">
                <a href="#" className="bg-primary p-2 px-2 text-white font-body text-sm">Download PR Questionnaire</a>
                <a href="#" className="bg-primary p-2 px-2 text-white font-body text-sm">Download TV Questionnaire</a>
              </div>
            </section>
            <Tab.Group defaultIndex={0}>
              <Tab.List className="space-x-2 font-body border-b-2 pb-2">
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  bg-red-600/[.2] text-primary">All Publications</Tab>
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  hover:bg-red-600/[.08] hover:text-red-600/[1]">TV</Tab>
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  hover:bg-red-600/[.08] hover:text-red-600/[1]">Listicles</Tab>
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  hover:bg-red-600/[.08] hover:text-red-600/[1]">Best Sellers</Tab>
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  hover:bg-red-600/[.08] hover:text-red-600/[1]">PR Bundles</Tab>
                <Tab className="p-2 cursor-pointer outline-none text-sm rounded-sm  hover:bg-red-600/[.08] hover:text-red-600/[1]">Misc</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel><AllPublications /></Tab.Panel>
                <Tab.Panel><Tv /></Tab.Panel>
                <Tab.Panel><Listicles /></Tab.Panel>
                <Tab.Panel><BestSeller /></Tab.Panel>
                <Tab.Panel><PRBundles /></Tab.Panel>
                <Tab.Panel><Misc /></Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
          <footer className='bg-gray-200 mt-52 flex justify-between p-10'>
            <p>©️ Ascend Agency</p>
            <a href="#" className='hover:opacity-50 duration-250'>Terms of Service</a>
          </footer>
        </div>
      </div>
    </>
  )
}
