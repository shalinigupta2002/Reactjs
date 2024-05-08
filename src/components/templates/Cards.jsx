import {Link} from "react-router-dom";
const Cards = ({data,title}) => {
  return (
    <div className="flex flex-wrap h-full w-full  bg-[#1F1E24] ">
      {data.map((c,i)=>(
        <Link className = "w-[50vh] m-1 "key={i}>
          <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5) h-[full] w-[60vh] object-cover "src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt=""/>
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
          {c.name || c.title || c.original_name || c.original_title}
          </h1>
         
          </Link>
      ))}
    </div>
  )
}

export default Cards
