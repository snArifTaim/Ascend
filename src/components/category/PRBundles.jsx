import React from 'react'

export const PRBundles = () => {
  return (
    <>
      <div>
        <div>
          <div className='opacity-100'>
            <div>

              <div className='flex flex-col mb-4'>
                <h2 className="font-body font-medium text-lg my-2 uppercase">Entertainment</h2>
                <div className='grid grid-cols-1 grid-flow-row md:grid-flow-col md:grid-cols-3 gap-4'>

                  <div className='bg-white p-1 font-body text-sm'>
                    <h3 className='font-medium bg-red-600/[.2] text-primary p-1'>Bundle 1 — $2,000</h3>
                    <h3 className='bg-gray-50 p-1'>Retail Value — $3,150</h3>
                    <ul className="list-decimal ml-6 mt-2 mb-2">
                      <li>LA Weekly</li>
                      <li>Los Angeles Tribune</li>
                      <li>Flaunt Magazine</li>
                      <li>Grazia Magazine</li>
                      <li>OK! Magazine</li>
                    </ul>
                  </div>

                  <div className='bg-white p-1 font-body text-sm'>
                    <h3 className='font-medium bg-red-600/[.2] text-primary p-1'>Bundle 2 — $5,250</h3>
                    <h3 className='bg-gray-50 p-1'>Retail Value — $3,150</h3>
                    <ul className="list-decimal ml-6 mt-2 mb-2">
                      <li>LA Weekly</li>
                      <li>Los Angeles Tribune</li>
                      <li>Flaunt Magazine</li>
                      <li>Grazia Magazine</li>
                      <li>OK! Magazine</li>
                    </ul>
                  </div>

                  <div className='bg-white p-1 font-body text-sm'>
                    <h3 className='font-medium bg-red-600/[.2] text-primary p-1'>Bundle 3 — $13,500</h3>
                    <h3 className='bg-gray-50 p-1'>Retail Value — $3,150</h3>
                    <ul className="list-decimal ml-6 mt-2 mb-2">
                      <li>LA Weekly</li>
                      <li>Los Angeles Tribune</li>
                      <li>Flaunt Magazine</li>
                      <li>Grazia Magazine</li>
                      <li>OK! Magazine</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
