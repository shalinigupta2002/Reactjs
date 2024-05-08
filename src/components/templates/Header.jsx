import { Link } from 'react-router-dom';
const Header = ({data}) => {
  console.log(data.backdrop_path);
  return (
    // <div style={{background-image: url("https://image.tmdb.org/t/p/original/tBmJCH9llj1Q9jDOS7vGWnl7GVj.jpg")  }}
    // className='w-full h-[50vh]'>
      
    // </div>
    <div className='flex'>
      
      <img  className=' flex w-full h-[57vh] relative  p-[2%] left-object-fit  overflow-hidden  ' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`} alt="no image found" />
     
        
      <div className=' mt-[5vh]'>
              <h1 className=' w-[70%] text-5xl font-black  text-white justify-end'>
                {data.name || data.title }
              </h1>
              <p className='w-[70%] mt-5 text-white '>{data.overview.slice(0,120)}....<Link className='text-blue-500'>more</Link></p>
              <p className='text-white flex'>
              <svg className="text-yellow-500 size-7 p-1 flex  "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10.063V4C21 3.44772 20.5523 3 20 3H19C17.0214 4.97864 13.3027 6.08728 11 6.61281V17.3872C13.3027 17.9127 17.0214 19.0214 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12 22.5 11.0681 21.8626 10.285 21 10.063ZM5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V7H5Z"></path></svg> {data.release_date || "No Information"}
              <svg  className="size-7 p-1 flex text-yellow-500  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path></svg>
              {data.media_type || "No Information"}</p>
              
              <Link className='bg-orange-600 p-1 rounded text-white font-semibold mt-2'>Watch Trailer</Link>
      </div>
     
    </div>
   
  )
}
// https://image.tmdb.org/t/p/original${data.backdrop_path
// linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7), (0,0,0,.9))|| data.original_name || data.original_title
// {data.overview.slice(200)}
export default Header
