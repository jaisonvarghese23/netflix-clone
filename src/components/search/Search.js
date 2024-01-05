
import React, { useEffect, useState} from 'react'
import './search.css'
// import Navbar from '../navbar/navbar';
import YouTube from 'react-youtube';
import Instance from '../axios';
import { API_KEY, imageUrl } from '../constants/Constant';
import { useGlobalContext } from '../../Context';
import { hover } from '@testing-library/user-event/dist/hover';
const AppContext=React.createContext();
let lengthofsearch=0;
function Search(props) {
    const {query} = useGlobalContext();
    const [post, setPost] = useState([]);
    const [searchSet,setSearchSet]=useState([''])
    // const [query,setQuery]=useState("");
    Instance.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`).then(response=>{
     lengthofsearch = response.data.results.length;
    setSearchSet(response.data.results)
  })
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    
    const [urlid,seturlID]=useState('')
    const handleMovie =(id)=>{
      
    console.log(id);
    Instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      // console.log(response.data);
      if(response.data.results.length!=0){
        seturlID(response.data.results[0]);
      }
    },[])
  
    }
    
    return (
        <>
   
    <div className='row'>
       <h2>{lengthofsearch!=0 ?  props.title : query ? ' No results' :""  }</h2>
       <div className="posters">
       {
      
          searchSet.map((obj)=>< div> <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallpost':'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            <h6>{obj.title}</h6>
          </div>
          )}

  
  
  {/* 
        {post.map((obj)=>
               <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallpost':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
  
        )} */}
        
       </div>
       <div>{ urlid &&  <YouTube videoId={urlid.key} opts={opts} ></YouTube>}</div>
      
          </div>

          </>
    
    
    )
  }
  

export default Search