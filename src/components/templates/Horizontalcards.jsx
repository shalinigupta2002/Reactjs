import Dropdown from "./Dropdown"

const Horizontalcards = ({data}) => {
  return (
    
     
      <div className='w-full flex h-[55vh] overflow-y-hidden p-5 mb-5'>
      {data.map((d,i)=>(
      <div key={i} className='min-w-[20%] h-full bg-zinc-900 mr-5  '>
        <img  className="w-full  h-[55%] object-cover" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="no image found"/>
        
      <h1 className='mt-0.5 mb-1 text-l font-bold  text-white '>
        {d.name || d.title }
      </h1>
      <p className='w-[99%] p-0.5 text-white '>{d.overview.slice(0,50)}....<span className='text-zinc-200'>more</span></p>
      
       </div>
      ))}
      </div>
    
  )
}
// {data.map((d,i)=>(
//   <div key={i} className='w-[15%]'>
//    <h1>
//      {d.title || d.name || d.original_name || d.original_title }
//      </h1>
//      <p></p>
//    </div>
export default Horizontalcards
