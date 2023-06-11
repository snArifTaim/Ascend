import React from 'react'

export const Tv = () => {
  return (
    <>
      <div>
        <div>
          <div className='opacity-100'>
            <div className='flex lg:space-x-4 flex-col lg:flex-row'>
              <aside className='font-body mt-2 space-y-4 bg-white border p-4 lg:border-none lg:p-0 lg:bg-transparent w-full lg:w-[350px]'>
                <div className='sticky space-y-2 top-5'>
                  <div className='space-y-1'>
                    <p className='text-sm'>Affiliate name or calls</p>
                    <input className="text-sm w-full p-2 placeholder:text-gray-400 placeholder:font-base border-2 bg-white" placeholder="Search TV name"></input>
                  </div>
                </div>
                <ul className="text-sm text-gray-800 space-y-1">
                  <li>Turn Around Time: 2-4 Weeks</li>
                  <li>Segment Times vary between 2-4 minutes</li>
                  <li>Zoom &amp; In Person Options Available</li>
                </ul>
              </aside>
              <section className='w-full mt-2'>
                <p className='font-body text-sm mb-1'>Showing 71 of 71 TVs</p>
                <div className='overflow-x-scroll lg:overflow-visible relative'>
                  <table className='w-full divide-y divide-gray-300 overflow-hidden lg:overflow-visible border bg-white'>
                    <thead className='text-xs text-gray-700 bg-white sticky -top-1 shadow-sm'>
                      <tr className="text-primary">
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex">Affiliate</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Calls</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">State</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Market</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">DMA Rank</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Program Name</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Location</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Time</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Rate</div></th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      <tr className="text-sm">
                        <td className="py-2 px-2">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p>NBC</p>
                              <a href="#" className="underline flex items-center group" rel="noopener noreferrer nofollow" target="_blank">Example<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 group-hover:text-red-600/[1] group-hover:-translate-y-0.5 group-hover:duration-500 duration-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg></a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center border-l border-r">WCMH</td>
                        <td className="text-center border-l border-r">Ohio</td>
                        <td className="text-center border-l border-r">Greenville-New Bern-Washington</td>
                        <td className="text-center border-l border-r">33</td>
                        <td className="text-center border-l border-r"><span id=":r1ik:-LifeStyle Segment" className="text-xs font-medium mr-1 px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">LifeStyle Segment</span></td>
                        <td className="text-center border-l border-r">Satellite, Studio, </td>
                        <td className="text-center border-l border-r w-8"><button className="inline-flex items-center justify-center" data-state="closed"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></button></td>
                        <td className="text-center border-l border-r">$1,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
