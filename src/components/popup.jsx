import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <>
      {/* <div className="popup-overlay">
        <div className="popup-content">
          <div className="popup-message">{message}</div>
          <button className="popup-close" onClick={onClose}>Close</button>
        </div>
      </div> */}
      <div className='overflow-hidden'>
        <div>
          <div>
            <div id='headlessui-dialog-:Rn6:'>
              <div className="fixed inset-0 bg-black/30"></div>
              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center'>
                  <div className='w-full mx-4 md:mx-auto md:w-fit  bg-white relative flex flex-col lg:flex-row'>
                    <img alt="Banner image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="w-full max-h-[200px] lg:max-h-full lg:w-80 object-cover"
                      src="https://pricing.ascendagency.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8n90kyzz%2Fproduction%2Fa167d166b2580c2919c1945c6d4a6fb2d929db38-1080x1080.png&w=1080&q=75" style={{ color: "transparent" }} />
                    <div className='p-4 min-w-full md:min-w-[500px] max-w-[500px] max-h-[500px]'>
                      <h2 className="font-body font-bold text-primary text-2xl mb-2" >Ascend Agency</h2>
                      <div className='max-h-80 overflow-auto'>
                        <h3 className="text-lg font-bold"><strong><span style={{ textDecoration: "underline" }}>June Service Update</span></strong></h3>
                        <ul className="pl-4 py-2 my-3 space-y-1 bg-gray-50 border rounded"><li className="flex items-center gap-1">Added a Best Seller Tab so that you can see the TOP 60 Publications that we sell are!</li></ul>
                        <p className="leading-relaxed mb-1"><strong>Best New Publications: </strong></p>
                        <ul className="pl-4 py-2 my-3 space-y-1 bg-gray-50 border rounded">
                          <li className="flex items-center gap-1"><div className="inline-flex items-center">
                            <img alt="Arabian Business image" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="w-5 h-5 object-cover rounded-full border" src="https://pricing.ascendagency.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8n90kyzz%2Fproduction%2F992ef667f361f4b615c4b558c77bff69f86a12b6-225x225.png%3Fw%3D50%26h%3D50&w=64&q=75" style={{ color: "transparent" }} />
                            <p className="ml-1">Arabian Business</p>
                          </div> $1500 Fully Non Sponsored</li>
                        </ul>
                        <p className="leading-relaxed mb-1"><strong>Removed Publications:</strong></p>
                        <ul className="pl-4 py-2 my-3 space-y-1 bg-gray-50 border rounded"><li className="flex items-center gap-1">The Smithsonian</li></ul>
                      </div>
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
