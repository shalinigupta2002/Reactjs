import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from '../utils/axios';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import Loading from './Loading'
import Cards from './templates/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
const Tv = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today")
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1)
  const[hasMore, sethasMore] = useState(true)
  document.title = "db | Tv shows" + category;
  const GetMovie = async() => 
    { 
      try{
        const { data } = await axios.get(`/tv/${category}?page=${page}`);

        if(data.results.length > 0){
          setmovie((prevstate)=>[...prevstate, ...data.results])
          setpage(page+1);
        }
        else{
         sethasMore(false)
        }
        
      } catch(error) {
        console.log("Error:", error);
      }
    };
    const refreshHandler = () => {
      if (movie.length === 0) {
        GetMovie()
      }
      else {
      setpage(1)
      setmovie([])
      GetMovie()
    }
  }
    useEffect(()=>
    {
      refreshHandler()
    },[category]);
    console.log(movie);
    return movie.length > 0 ? (
  
      <div className='px-[3%] w-screen h-screen '>
          <div className = 'w-full flex items-center justify-between'>
            
            <h1 className='text-2xl font-semibold text-zinc-400 flex'>
            <svg onClick={() => navigate(-1)} className="size-9 p-1 hover:text-[EA580C]"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          
            Movie<small className='ml-2 text-sm mt-3 text-zinc-600'>({category})</small>
            </h1>
            <div className='flex items-center w-[80%] h-full'>
              <Topnav />
              <Dropdown
                 title = 'category'
                 options = {['popular','top_rated','on_the_Air','airing_today']}
                 func={(e) => setcategory(e.target.value)}
              />
              <div className='w-[2%]'> </div>
            </div>
          </div>
          <InfiniteScroll  
            dataLength={movie.length}
            next={GetMovie}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
          <Cards data={movie} title={category}/>
           </InfiniteScroll>
          
      </div>
    
    ): (
       <Loading />
    )
 
}

export default Tv
