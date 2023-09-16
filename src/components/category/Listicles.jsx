import React from 'react'
import AppContext from '../../context/AppContext'; 
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'; 

export const Listicles = () => {
  
  const myContext = React.useContext(AppContext);
  const { datas} = myContext;
  const datasx = typeof(datas.datas?.publications) == 'object' ? datas.datas.publications : [];
  const [publications, setPublications] = React.useState(datasx);
  const [filteredPub, setFilteredPub] = React.useState(publications);
   

  const filterMe = () => {
    // search first 
    let obj = Object(publications);
    obj= obj.filter(o => {
      if(o.listicles != null) {return true; } 
    });
    setFilteredPub(obj);
  }

  React.useEffect(() => {
    filterMe();
  
    return () => {
      
    }
  }, []);
  
  return (
    <>
      <div>
        <div>
          <div className='opacity-100'>
            <div className='flex flex-col'>
              <div className='mt-2'>
                <p className='font-body text-sm mb-1'>Showing {filteredPub.length} of {filteredPub.length} publications</p>
                <div className='overflow-x-scroll lg:overflow-visible relative'>
                <table className='w-full divide-y divide-gray-300 overflow-hidden lg:overflow-visible border bg-white'>
                    <thead className='text-xs text-gray-700 bg-white sticky -top-1 shadow-sm'>
                      <tr className="text-primary">
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex">Publication</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Genres</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Price</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">DA<button className="text-gray-500 ml-1 inline-flex items-center justify-center" data-state="closed"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z" ></path></svg></button></div></th><th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">TAT<button className="text-gray-500 ml-1 inline-flex items-center justify-center" data-state="closed"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"></path></svg></button></div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Region</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Sponsored</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Indexed</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Image</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2"><div className="flex justify-center">Do follow</div></th>
                        <th className="font-body font-medium border-l border-r uppercase p-2 px-2">
                          <div className="flex justify-center exmple">EXAMPLE</div>
                        {/* <div className="flex justify-center buyth">Buy</div> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                       {Object(filteredPub).map((data, i) =>{ 
                        return <>
                        <tr className='text-sm'>
                        <td className="py-2 px-2">
                          <div className="flex items-center space-x-3">
                            <div className="inline-flex w-10 h-10">

                            {data.logo !== null && data.logo !=='' && (<>
                                <img loading="lazy" width="100" height="100" decoding="async" data-nimg="1" 
                                className="w-10 h-10 object-cover rounded-full" style={{ color: "transparent" }}
                                src={data.logo }
                                />
                              </>)} 
                            </div>
                            <div>
                              <div className="flex items-center">
                                <a href={data.url} className="underline flex items-center group" rel="noopener noreferrer nofollow"
                                 target="_blank">{data.name}</a>
                              </div>
                              <div className="text-gray-500 text-sm font-semibold tracking-wide">
                              {data.badges != null && (data.badges).map(badge =>{
                              return (<><span key={badge.name}  style={{
                                background: badge['bg-color'],
                                color: badge['text-color'],

                              }} className="text-xs font-medium mr-1 px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">{badge.name}</span></>);
                            })}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 border-l border-r">
                          <div className="flex flex-col items-center space-y-1">
                            {(data.genres).length <= 2 ? (<>
                            {(data.genres).map(gen =>{
                              return (<><span id={":r1gs:-"+gen.name} className="text-xs font-medium mr-1 px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">{gen.name}</span></>);
                            })}
                            </>) : (<>
                              <span className="mr-1 text-gray-500">{(data.genres).length} genres</span>
                              </>) }
                            
                          </div>
                        </td>

                        <td className="text-center border-l border-r">
                          <div>
                            {data.listicles != null && (data.listicles).map(listicle =>  (<><p class="my-0.5"><span class="text-gray-500">{listicle.name}</span>: ${listicle.price}</p></>))}
                          </div>
                           </td>
                        <td className="text-center border-l border-r">{data.domain_authority}</td>
                        <td className="text-center border-l border-r">{data.estimated_time}</td>
                        <td className="text-center border-l border-r">
                        {(data.regions).map(reg =>{
                              return (<><span >{reg.name} </span> </>);
                            })} </td>
                        <td className="text-center border-l border-r">{(data.sponsored)[0].toUpperCase()+(data.sponsored).slice(1)}</td>
                        <td className="text-center border-l border-r">{(data.indexed)[0].toUpperCase()+(data.indexed).slice(1)}</td>
                        <td className="text-center border-l border-r">
                          <div className="flex items-center justify-center space-x-2">{(data.image)[0].toUpperCase()+(data.image).slice(1)}</div>
                        </td>
                        
                        <td className="text-center border-l border-r">{(data.do_follow)[0].toUpperCase()+(data.do_follow).slice(1)}</td>
                        <td className='text-center border-l border-r'>
                        {data.articlePreview != null && data.articlePreview !='' && (<>
                            <a id={'global'+data.slug} > View Image </a>
                            <ReactTooltip anchorSelect={'#global'+data.slug} aria-haspopup='true'  clickable>
                              <img style={{
                                "max-height":'300px',
                                "max-width":'250px', 
                              }} src={data.articlePreview}/>
                            </ReactTooltip>
                          </>) }
                          
                          {/* {data.buyUrl != null && data.buyUrl !='' && (<>
                            <a href={data.buyUrl} target='_blank'  className='buyb'> Buy </a>
                          </>) } */}
      
                    
                        </td>

                      </tr>
                      </>;
                       })}
                      
                    </tbody>
                  </table>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
