import { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import axios from "../../utils/axios"; 
import Header from "./Header";
import Horizontalcards from "./Horizontalcards";
import Dropdown from "./Dropdown";
import Loading from "../Loading";

const Home = () => {
  document.title = "db|Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const[trending, settrending] = useState(null);
  const [category,setcategory] = useState("all");

  const GetHeaderwallpaper = async() => 
  {
    try{
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomdata);
    } catch(error) {
      console.log("Error:", error);
    }
  };

  const GetTrending = async() => 
  {
    try{
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results)
      
    } catch(error) {
      console.log("Error:", error);
    }
  };
  // console.log(wallpaper)
  useEffect(()=> {
    
    GetTrending();
    !wallpaper && GetHeaderwallpaper();
  },[category]);
  
  return wallpaper && trending ? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
      <Topnav/>
      <Header data = {wallpaper} />
      <div className='flex justify-between p-5'>
        <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
        <Dropdown className ="w-[2%]"title="Filter" options={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} />
      </div>
      <Horizontalcards data ={trending} />
    </div>
    </>
  ):<Loading/>
}

export default Home
