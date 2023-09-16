import React from 'react'
import AppContext from '../../context/AppContext';

const Misc = () => {

  
  const myContext = React.useContext(AppContext);
  const { datas } = myContext;

  if(typeof(datas.datas?.misc) != 'object' ){
    return <></>;
  }
  

  
  return (
    <>
      <div>
        <div>
          <div className='opacity-100'>
            <div>
              <div className='flex flex-col mb-4'>
                <h2 className="font-body font-medium text-lg my-2 uppercase">{datas.datas.misc.title}</h2>
                {(datas.datas.misc.services).map(data  =>{
                  return (<>
                  <div className='flex flex-col font-body mb-3'>
                  <div className="bg-white p-3">
                    <p className="text-primary font-medium mb-1">{data.title}</p>
                    {(data.text).map(text => (<><p className="text-gray-500 text-sm">{text}</p></>))}
                    <p className="mt-1 text-sm">${data.price}</p>
                  </div>
                </div>
                </>);
                })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Misc