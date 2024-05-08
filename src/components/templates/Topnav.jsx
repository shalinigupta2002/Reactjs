import  { useState,useEffect } from 'react'
 import { Link } from 'react-router-dom'
import axios from '../../utils/axios';

const Topnav = () => {
  const [query,setquery] =useState("");
  const [searches,setsearches] =useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetSerches = async() => 
  {
    try{
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch(error) {
      console.log("Error:", error);
    }
  };
  useEffect(()=>{
    GetSerches();
  }, [GetSerches,query]);
 
  
  return (
    <div className='w-[100%] h-[10vh] relative flex items-center justify-center'>
      <svg className="size-8 p-1 flex text-zinc-400 text-3xl "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
      <input onChange={(e) => setquery(e.target.value)}
      value={query} className='w-[100%] border-2 border-indigo-500/100 mm-10 p-5 text-zinc-200 mx-10 text-xl outline-none border-none bg-transparent ' type='text' placeholder='search anything'/>
      
      {query.length > 0 && (<svg onClick={() => setquery(" ")}className="size-9 p-1 flex text-zinc-400 text-3xl absolute " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>)}
      <div className='absolute z-[1] w-[80%] left-[5%] max-h-[50vh] bg-zinc-200 top-[90%]  overflow-auto rounded'>
        {searches.map((s,i) => (
           <Link key={i} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold w-[100] flex  justify-start items-center border-b-2 p-[20px] bg-zinc-100">
           <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 ' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path
          || s.profile_path}`} alt="" />
          
           <span >{s.name || s.title || s.original_name ||s.original_title}</span>
           </Link>
        ))}
      </div>
    </div>
  )
}

export default Topnav
