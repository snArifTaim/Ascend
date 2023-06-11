import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Select from 'react-select'

const people = [
  { id: 1, name: 'Price (Asc)', unavailable: false },
  { id: 2, name: 'Price (Desc)', unavailable: false },
  { id: 3, name: 'Domain Authority (Asc)', unavailable: false },
  { id: 4, name: 'Domain Authority (Desc)', unavailable: false },
]

const langOptions = [
  { value: 'Mexico', label: 'Mexico' },
  { value: 'United States', label: 'United States' },
  { value: 'New Mexico', label: 'New Mexico' }
]

const SelectGenres = [
  { id: 1, name: 'News', unavailable: false },
  { id: 2, name: 'Fashion', unavailable: false },
  { id: 3, name: 'Luxury', unavailable: false },
  { id: 4, name: 'Lifestyle', unavailable: false },
  { id: 5, name: 'Entertainment', unavailable: false },
  { id: 6, name: 'Real Estate', unavailable: false },
  { id: 7, name: 'Business', unavailable: false },
  { id: 8, name: 'Tech', unavailable: false },
  { id: 9, name: 'Web 3', unavailable: false },
  { id: 10, name: 'Music', unavailable: false },
  { id: 11, name: 'Sports', unavailable: false },
  { id: 12, name: 'Gaming', unavailable: false },
  { id: 13, name: 'Alcohol', unavailable: false },
  { id: 14, name: 'Political', unavailable: false },
  { id: 15, name: 'CBD', unavailable: false },
  { id: 16, name: 'Legal', unavailable: false },
]

const SelectType = [
  { id: 1, name: 'Pitch', unavailable: false },
  { id: 2, name: 'New', unavailable: false },
  { id: 3, name: 'Exclusive', unavailable: false },
  { id: 4, name: 'Contributor', unavailable: false },
  { id: 5, name: 'Press Release', unavailable: false },
  { id: 6, name: 'Staff', unavailable: false },
  { id: 7, name: 'Exclusive Rate', unavailable: false },
  { id: 8, name: '1 Year Lifespan', unavailable: false },
  { id: 9, name: 'Lowered', unavailable: false },
  { id: 10, name: 'Includes Social Posts', unavailable: false },
  { id: 11, name: '400K Impressions', unavailable: false },
]

export const AllPublications = () => {

  const [relative, setRelative] = useState(people[0]);
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return (
    <>
      <div>
        <div id='headlessui-tabs-panel-:R1l96:' >
          <div className='opacity-100'>
            <div className='flex lg:space-x-4 flex-col lg:flex-row'>

              <aside className="font-body mt-2 space-y-4 bg-white border p-4 lg:border-none lg:p-0 lg:bg-transparent w-full lg:w-[350px]">
                <div className='sticky space-y-2 top-5'>

                  <div className='space-y-1'>
                    <p className='text-sm'>Publication name</p>
                    <input placeholder='Search publication name' type="text" className='text-sm w-full p-2 placeholder:text-gray-400 placeholder:font-base border-2 bg-white' />
                  </div>

                  <div className='space-y-1'>
                    <p className='text-sm'>Sort by</p>
                    <div className='relative text-sm'>
                      <Listbox value={relative} onChange={setRelative}>
                        <Listbox.Button className="relative w-full bg-white border-2 p-2"><span className='block text-left text-gray-500 truncate'>{relative.name}</span></Listbox.Button>
                        <Listbox.Options className="absolute w-full z-10 mt-1 max-h-60 overflow-auto bg-white shadow-lg">
                          {people.map((person) => (
                            <Listbox.Option
                              className="relative cursor-pointer select-none text-gray-600"
                              key={person.id}
                              value={person}
                              disabled={person.unavailable}
                            >
                              <span className='block truncate p-1.5 font-normal'>{person.name}</span>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm">Price range</p>
                    <span dir="ltr" data-orientation="horizontal" aria-disabled="false" className="taimbro relative flex items-center select-none touch-none h-5">
                      <span data-orientation="horizontal" className="bg-black/10 relative grow rounded-full h-2">
                        <span data-orientation="horizontal" className="absolute bg-primary/50 rounded-full h-full" style={{ left: '34.25%', right: '0%' }}></span>
                      </span>
                      <span style={{ transform: 'var(--radix-slider-thumb-transform)', position: 'absolute', left: 'calc(34.25% + 3.15px)' }}>
                        <span role="slider" aria-valuemin="0" aria-valuemax="20000" aria-orientation="horizontal" data-orientation="horizontal" tabIndex="0" className="block w-5 h-5 cursor-grabbing bg-primary focus:outline focus:outline-offset-2 focus:outline-gray-500 rounded-sm" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="6850"></span>
                      </span>
                      <span style={{ transform: 'var(--radix-slider-thumb-transform)', position: 'absolute', left: 'calc(100% + -10px)' }}>
                        <span role="slider" aria-valuemin="0" aria-valuemax="20000" aria-orientation="horizontal" data-orientation="horizontal" tabIndex="0" className="block w-5 h-5 cursor-grabbing bg-primary focus:outline focus:outline-offset-2 focus:outline-gray-500 rounded-sm" aria-label="Maximum" aria-valuenow="20000"></span>
                      </span>
                    </span>
                    <div className="flex justify-between text-gray-500">
                      <span className="text-sm">$6,850</span>
                      <span className="text-sm">$20,000</span>
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Select regions</p>
                    <Select
                      classNames={{
                        control: (state) =>
                          state.isFocused ? 'border-blue-600' : 'border-grey-300',
                      }}
                      placeholder='Select regions'
                      options={langOptions}
                      isMulti
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: 'Congo pink',
                        },
                      })}
                    />
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Select genres</p>
                    {SelectGenres.map((genres) => (
                      <button key={genres.id} className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>{genres.name}</button>
                    ))}
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Type</p>
                    {SelectType.map((type) => (
                      <button key={type.id} className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>{type.name}</button>
                    ))}
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Sponsored</p>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Yes</button>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>No</button>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Discrete</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Do follow</p>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Yes</button>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>No</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Indexed</p>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Yes</button>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Maybe</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Image</p>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Yes</button>
                    <button className='text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'>Maybe</button>
                  </div>

                  <button className='text-sm hover:underline'>Reset all filters</button>

                </div>
              </aside>

              <section className='w-full mt-2'>
                <p className='font-body text-sm mb-1'>Showing 635 of 635 publications</p>
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
                          <div className="flex justify-center">Example</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      <tr className='text-sm'>
                        <td className="py-2 px-2">
                          <div className="flex items-center space-x-3">
                            <div className="inline-flex w-10 h-10">
                              <img alt="Hood Critic image" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="w-10 h-10 object-cover rounded-full" style={{ color: "transparent" }} src='https://pricing.ascendagency.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8n90kyzz%2Fproduction%2F41830af6c3f7d1a481695521558d17005b8ff6a1-200x200.webp%3Fw%3D100%26h%3D100&w=128&q=75' />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <a href="#" className="underline flex items-center group" rel="noopener noreferrer nofollow" target="_blank">LA Entertainment Weekly</a>
                              </div>
                              <div className="text-gray-500 text-sm font-semibold tracking-wide"></div>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 border-l border-r">
                          <div className="flex flex-col items-center space-y-1">
                            <span id=":r1gs:-Music" className="text-xs font-medium mr-1 px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">Music</span>
                          </div>
                        </td>

                        <td className="text-center border-l border-r">$75</td>
                        <td className="text-center border-l border-r">10</td>
                        <td className="text-center border-l border-r">1-3 Days</td>
                        <td className="text-center border-l border-r"><span> United States</span> <span> Utah</span></td>
                        <td className="text-center border-l border-r">No</td>
                        <td className="text-center border-l border-r">Yes</td>
                        <td className="text-center border-l border-r">
                          <div className="flex items-center justify-center space-x-2">Yes</div>
                        </td>
                        <td className="text-center border-l border-r">Yes</td>
                        <td className='text-center border-l border-r'>
                          <a href="https://cdn.sanity.io/images/8n90kyzz/production/7381a5f736b1269f8cbd0cf634b2900bfd58e478-1467x3900.png">
                            <button
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              className="image-container inline-flex items-center justify-center"><svg data-sanity-icon="images" width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" fontSize="20"><path d="M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z" stroke="currentColor" strokeWidth="1.2"></path></svg>
                            </button>
                          </a>
                        </td>

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
