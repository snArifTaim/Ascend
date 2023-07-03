import React from 'react';
import AppContext from '../context/AppContext';

const Popup = ({ message, onClose }) => {
  const myContext = React.useContext(AppContext);
  const { datas} = myContext;
   if(!datas.web.isAlert){
      return;
    }
  return (
    
    <>
  
      <div className='overflow-hidden'>
        <div>
          <div>
            <div id='headlessui-dialog-:Rn6:'>
              <div className="fixed inset-0 bg-black/30"></div>
              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center'>
                  <div className='w-full mx-4 md:mx-auto md:w-fit  bg-white relative flex flex-col lg:flex-row'>
                    <img alt="Banner image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="w-full max-h-[200px] lg:max-h-full lg:w-80 object-cover"
                      src={datas.web.alertImg} 
                      style={{ color: "transparent" }} />
                    <div className='p-4 min-w-full md:min-w-[500px] max-w-[500px] max-h-[500px]'>
                      <h2 className="font-body font-bold text-primary text-2xl mb-2" >{datas.web.alertTitle}</h2>
                      <div className='max-h-80 overflow-auto' dangerouslySetInnerHTML={{__html :datas.web.alertData }} />
                      <button className="font-body p-2 px-2 text-sm mt-4 flex items-center justify-center bg-primary text-white" onClick={onClose}>Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
