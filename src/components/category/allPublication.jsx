import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Select from 'react-select'
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import * as Slider from '@radix-ui/react-slider';
import axios from 'axios';
import AppContext from '../../context/AppContext';
const people = [
  { id: 1, name: 'Price (Asc)', unavailable: false },
  { id: 2, name: 'Price (Desc)', unavailable: false },
  { id: 3, name: 'Domain Authority (Asc)', unavailable: false },
  { id: 4, name: 'Domain Authority (Desc)', unavailable: false },
]

export const AllPublications = () => {


  const [relative, setRelative] = useState(people[0]);
  const [publications, setPublications] = useState([]);
  const [filteredPub, setFilteredPub] = useState([]);
  const [SelectGenres, setSelectGenres] = useState([]);
  const [SelectedRegions, setSelectedRegions] = useState([]);
  const [langOptions, setlangOptions] = useState([]);
  const [SelectType, setSelectType] = useState([]);
  const [priceRange, setPrice] = useState([0,20000]); 

  const [SelectedType, setSelectedType] = useState([]);
  const [SelectedGenres, setSelectedGenres] = useState([]);

  const [SelectedSponser, setSelectedSponser] = useState([]);
  const [SelectedDofollow, setSelectedDofollow] = useState([]);
  const [SelectedIndex, setSelectedIndex] = useState([]);
  const [SelectedImage, setSelectedImage] = useState([]);
  const [searchQuery, setsearchQuery] = useState('');
   
  
  const myContext = React.useContext(AppContext);
  const { datas, dispatch } = myContext;




  const filterMe = () => {
    // search first 
    let obj = Object(publications);
    obj= obj.filter(o => {
      let q= (o.name).toLowerCase();
 
      if(q.includes(searchQuery.toLowerCase())){
        return true;
      }
      return false;
    });

    // range price 
    
    obj =  (obj).filter(o => {
      if(o.price >= priceRange[0] && o.price <= priceRange[1]){
       return true;
      }
   });


    // regions 
    if(SelectedRegions.length > 0){
      obj =  (obj).filter(o => {
        if(o.regions == null){ return false;}
        let regions = o.regions;
        for (let j = 0; j < regions.length; j++) {
          const elementPub = regions[j];
  
          for (let i = 0; i < SelectedRegions.length; i++) {
            const element = SelectedRegions[i];
            if(elementPub.slug == element.slug) {
              return true;
            }
            
          } 
        }
     });
    }


    


     
    // genres filtyer
    if(SelectedGenres.length > 0){
      obj = Object(obj).filter(o => {
        if(o.genres == null){ return false;}
        let genres = o.genres;
        
        for (let j = 0; j < genres.length; j++) {
          const elementPub = genres[j];
  
          for (let i = 0; i < SelectedGenres.length; i++) {
            const element = SelectedGenres[i];
            if(elementPub.slug == element) {
              return true;
            }
            
          } 
        }
     });
    }
    
      // type / badge filtyer 
      if(SelectedType.length > 0){
        obj = Object(obj).filter(o => {
          if(o.badges == null){ return false;}

          let badges = o.badges;
          for (let j = 0; j < badges.length; j++) {
            const elementPub = badges[j];
    
            for (let i = 0; i < SelectedType.length; i++) {
              const element = SelectedType[i];
              if(elementPub.name == element) {
                return true;
              }
              
            } 
          }
       });
      }

      // sponser filtyer 
      if(SelectedSponser.length > 0){
        obj = Object(obj).filter(o => {
          if(o.sponsored == null){ return false;}
 
          for (let i = 0; i < SelectedSponser.length; i++) {
            const element = SelectedSponser[i];
            if((o.sponsored) == element) {
              return true;
            }
          } 
         
       });
      }
      // dofollow filtyer 
      if(SelectedDofollow.length > 0){
        obj = Object(obj).filter(o => {
          if(o.do_follow == null){ return false;}
 
          for (let i = 0; i < SelectedDofollow.length; i++) {
            const element = SelectedDofollow[i];
            if((o.do_follow) == element) {
              return true;
            }
          } 
         
       });
      }

      //filter is indexs
      if(SelectedIndex.length > 0){
        obj = Object(obj).filter(o => {
          if(o.indexed == null){ return false;}
 
          for (let i = 0; i < SelectedIndex.length; i++) {
            const element = SelectedIndex[i];
            if((o.indexed) == element) {
              return true;
            }
          } 
         
       });
      }

       //filter image 
       if(SelectedImage.length > 0){
        obj = Object(obj).filter(o => {
          if(o.image == null){ return false;}
 
          for (let i = 0; i < SelectedImage.length; i++) {
            const element = SelectedImage[i];
            if((o.image) == element) {
              return true;
            }
          } 
         
       });
      }

   

if(relative.id != null){
     obj.sort(function(a, b) {
      if(relative.id== 1){
        return parseFloat(a.price) - parseFloat(b.price);
      }
      if(relative.id== 2){
        return parseFloat(b.price) - parseFloat(a.price);
      }
      if(relative.id== 3){
        return parseFloat(a.domain_authority) - parseFloat(b.domain_authority);
      }
      if(relative.id== 4){
        return parseFloat(b.domain_authority) - parseFloat(a.domain_authority);
      }

  });
} 
 
   

    setFilteredPub(obj);
}
  React.useEffect( () => {
    filterMe();
    return () => {
      
    }
  }, [publications, searchQuery,relative,priceRange ,SelectedRegions,SelectedGenres , SelectedType ,SelectedSponser, SelectedDofollow, SelectedIndex, SelectedImage,searchQuery ]);

  const resetFilter =() =>{
    setSelectedType([]);
    setSelectedGenres([]);
    setSelectedSponser([]);
    setSelectedDofollow([]);
    setSelectedIndex([]);
    setSelectedImage([]);
    setsearchQuery('');
    setRelative(people[0]);
    setPrice([0,20000]);
  }
 
  React.useEffect(() => { 

    let allgens= [];
    let allRegions= [];
    let allbadges= [];
    for(let i=0; i < publications.length;i++){
      let pub= publications[i];
      if((pub.badges) !== null ){
        for(let j=0; j< (pub.badges).length; j++){
          let nGen= (pub.badges)[j];
          nGen = {...nGen, isActive: false};

          let isExists = false;
          allbadges.forEach(e =>{
            if(e.name == nGen.name){
              isExists = true;
            }
          });
          if(!isExists){
            allbadges.push(nGen);
          }
        }
      }
      

      setSelectType(allbadges);

      for(let j=0; j< (pub.genres).length; j++){
        let nGen= (pub.genres)[j];
        nGen = {...nGen, isActive: false};
        let isExists = false;
        allgens.forEach(e =>{
          if(e.slug == nGen.slug){
            isExists = true;
          }
        });
        if(!isExists){
          allgens.push(nGen);
        }
      }


      for(let j=0; j< (pub.regions).length; j++){
        let nGen= (pub.regions)[j];
        nGen = {...nGen, label: nGen.name, value: nGen.slug, isActive: false};
        let isExists = false;
        allRegions.forEach(e =>{
          if(e.slug == nGen.slug){
            isExists = true;
          }
        });
        if(!isExists){
          allRegions.push(nGen);
        }

      }

    }
    setSelectGenres(allgens);
    setlangOptions(allRegions);  
    return () => {
      
    }
  }, [publications]);

  React.useEffect(() => {
    console.log(datas);
    let isLog= localStorage.getItem('isLogged');
    let hash= localStorage.getItem('hash');
    if(isLog == null && hash == null){
      return;
    }

    let config = {
      headers:{
        "token":hash,
      }}; 
    axios.get(BASE_URL+ '/api/datas', config).then(({data})=> {
       if(data.status){
        
        dispatch({ type: "set_data", data:  data});

        setPublications(data.publications);
        setSelectType(SelectType);
       }
    }).catch(e =>{
        
        setTimeout( () =>{
            document.location.reload();
        } , 2000);
  
        
    });

    
    return () => {
      
    }
  }, []);


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
                    <input value={searchQuery}
                    onChange={(e) => {
                      // console.log(e)
                      setsearchQuery(e.target.value);
                    }}
                    placeholder='Search publication name'
                     type="text" 
                     className='text-sm w-full p-2 placeholder:text-gray-400 placeholder:font-base border-2 bg-white' 
                     />
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
                    <Slider.Root 
                    onValueChange={setPrice}
                    className="taimbro relative flex items-center select-none touch-none h-5" 
                    defaultValue={[0, 20000]}
                    min={0}
                    max={20000}
                    data-orientation="horizontal" >
    <Slider.Track className="bg-black/10 relative grow rounded-full h-2">
      <Slider.Range className="absolute bg-primary/50 rounded-full h-full" style={{
        background: "#ef3e36"
      }}/>
    </Slider.Track>
    <Slider.Thumb className="block w-5 h-5 cursor-grabbing bg-primary focus:outline focus:outline-offset-2 focus:outline-gray-500 rounded-sm"/>
    <Slider.Thumb  className="block w-5 h-5 cursor-grabbing bg-primary focus:outline focus:outline-offset-2 focus:outline-gray-500 rounded-sm"/>
  </Slider.Root>


                
                    <div className="flex justify-between text-gray-500">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
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
                      onChange={setSelectedRegions}

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
                      <button key={genres.slug} onClick={() =>{
                        if(!SelectedGenres.includes( genres.slug)){
                          setSelectedGenres([...SelectedGenres, genres.slug]);
                        }else{
                          setSelectedGenres(SelectedGenres.filter(item => item !== genres.slug));
                        }
                      
                      }} className={SelectedGenres.includes( genres.slug) ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}>{genres.name}</button>
                    ))}
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Type</p>
                    {SelectType.map((type) => (
                      <button 
                      key={type.id}
                      
                      onClick={() =>{
                        if(!SelectedType.includes( type.name)){
                          setSelectedType([...SelectedType, type.name]);
                        }
                        else{
                          setSelectedType(SelectedType.filter(item => item !==  type.name));
                        }
                      
                      }}
                      className={SelectedType.includes( type.name) ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}

                       >{type.name}</button>
                    ))}
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Sponsored</p>
                    <button 
                    onClick={() =>{
                      let name= 'yes';
                        if(!SelectedSponser.includes( name)){
                          setSelectedSponser([...SelectedSponser, name]);
                        }
                        else{
                          setSelectedSponser(SelectedSponser.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedSponser.includes( 'yes') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}

>Yes</button>
                    <button  onClick={() =>{
                      let name= 'no';
                        if(!SelectedSponser.includes( name)){
                          setSelectedSponser([...SelectedSponser, name]);
                        }
                        else{
                          setSelectedSponser(SelectedSponser.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedSponser.includes( 'no') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}

 >No</button>
                    <button onClick={() =>{
                      let name= 'discrete';
                        if(!SelectedSponser.includes( name)){
                          setSelectedSponser([...SelectedSponser, name]);
                        }
                        else{
                          setSelectedSponser(SelectedSponser.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedSponser.includes( 'discrete') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}
 >Discrete</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Do follow</p>
                    <button 
                    onClick={() =>{
                      let name= 'yes';
                        if(!SelectedDofollow.includes( name)){
                          setSelectedDofollow([...SelectedDofollow, name]);
                        }
                        else{
                          setSelectedDofollow(SelectedDofollow.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedDofollow.includes( 'yes') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}
 >Yes</button>
                    <button 
                      onClick={() =>{
                        let name= 'no';
                          if(!SelectedDofollow.includes( name)){
                            setSelectedDofollow([...SelectedDofollow, name]);
                          }
                          else{
                            setSelectedDofollow(SelectedDofollow.filter(item => item !==  name));
                          }
                        
                        }}
                        className={SelectedDofollow.includes( 'no') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}  
                  >No</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Indexed</p>
                    <button 
                     onClick={() =>{
                      let name= 'yes';
                        if(!SelectedIndex.includes( name)){
                          setSelectedIndex([...SelectedIndex, name]);
                        }
                        else{
                          setSelectedIndex(SelectedIndex.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedIndex.includes( 'yes') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}  
                
                >Yes</button>
                    <button 
                      onClick={() =>{
                        let name= 'maybe';
                          if(!SelectedIndex.includes( name)){
                            setSelectedIndex([...SelectedIndex, name]);
                          }
                          else{
                            setSelectedIndex(SelectedIndex.filter(item => item !==  name));
                          }
                        
                        }}
                        className={SelectedIndex.includes( 'maybe') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}  
                  
                  >Maybe</button>
                  </div>

                  <div className='space-y-1'>
                    <p className="text-sm">Image</p>
                    <button 
                    onClick={() =>{
                      let name= 'yes';
                        if(!SelectedImage.includes( name)){
                          setSelectedImage([...SelectedImage, name]);
                        }
                        else{
                          setSelectedImage(SelectedImage.filter(item => item !==  name));
                        }
                      
                      }}
                      className={SelectedImage.includes( 'yes') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}  
                
                
                >Yes</button>
                    <button 
                       onClick={() =>{
                        let name= 'maybe';
                          if(!SelectedImage.includes( name)){
                            setSelectedImage([...SelectedImage, name]);
                          }
                          else{
                            setSelectedImage(SelectedImage.filter(item => item !==  name));
                          }
                        
                        }}
                        className={SelectedImage.includes( 'maybe') ? 'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-primary' :'text-white text-sm cursor-pointer p-1 px-2 mr-1 bg-[#6e6e6e]'}  
                  
                  >Maybe</button>
                  </div>

                  <button className='text-sm hover:underline' onClick={()=> {resetFilter();}}>Reset all filters</button>

                </div>
              </aside>

              <section className='w-full mt-2'>
                <p className='font-body text-sm mb-1'>{filteredPub.length} of {publications.length} publications</p>
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
                       {Object(filteredPub).map((data, i) =>{

                        return <>
                        <tr className='text-sm'>
                        <td className="py-2 px-2">
                          <div className="flex items-center space-x-3">
                            <div className="inline-flex w-10 h-10">
                              {data.logo !== null && data.logo !=='' && (<>
                                <img alt="Hood Critic image" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" 
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

                        <td className="text-center border-l border-r">${data.price}</td>
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

 
                        </td>

                      </tr>
                      </>;
                       })}
                      
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
