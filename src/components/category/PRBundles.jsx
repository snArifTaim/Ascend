import React from 'react'
import AppContext from '../../context/AppContext';

export const PRBundles = () => {
  
  const myContext = React.useContext(AppContext);
  const { datas, dispatch ,isLogged,checkLogin} = myContext;
  
  return (
    <>
      <div>
        <div>
          <div className='opacity-100'>
            <div>
              {(datas.datas.prbundles).map(dt =>{
                
                return <>
                 <div className='flex flex-col mb-4'>
                  <h2 className="font-body font-medium text-lg my-2 uppercase">{dt.title}</h2>
                    <div className='grid grid-cols-1 grid-flow-row md:grid-flow-col md:grid-cols-3 gap-4'>
                  {Object(dt.bundles).map(dat =>{
                    
                    return <>
                      <div className='bg-white p-1 font-body text-sm'>
                        <h3 className='font-medium bg-red-600/[.2] text-primary p-1'>Bundle 1 — ${dat.price}</h3>
                        <h3 className='bg-gray-50 p-1'>Retail Value — ${dat.retail}</h3>
                        <ul className="list-decimal ml-6 mt-2 mb-2">
                          {(dat.entries).map(t =>{
                            return <><li>{t}</li></>;
                          })}
                        </ul>
                      </div>
                    </>;

                  })}
                  </div>
                 </div>
                
                </>;
              })}
               
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
