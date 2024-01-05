import React,{useState} from 'react'
import Instance from '../axios'
import RowPost from '../RowPost/RowPost'
import { API_KEY } from '../constants/Constant'
import "./navbar.css"
import { useGlobalContext } from '../../Context';
const count=1;
// let data=['']
function Navbar() {
  // const [searchQ,setSearchQ]=useState('')
  // const [searchSet,setSearchSet]=useState([''])

  // const [query,setQuery]=useState('');
  const {query,setQuery}=useGlobalContext();

  
  //  const search = () =>{
  //   setSearchQ(query);
  //   console.log(query);
  //   Instance.get(`https://api.themoviedb.org/3/search/movie?query=${searchQ}&api_key=${API_KEY}`).then((response)=>{
  // // data=response.data.results;
  //     setSearchSet(response.data.results)
  //     console.log(searchSet);

  // },[count])

 
 //  }
  return (
    <div className="container-flex col-12 navbars ">
    <div className="row ">
    {/* <div className='col-12'> */}
       <div className='col-md-2 col-2'> <img className='logo ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" /></div>
       <div className='col-md-6 col-1'></div>
        {/* <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />  */}
        <div className='col-md-3 col-8 textbox'>    <form action="#" onSubmit={(e)=>e.preventDefault()}> 
      <input type="text"  value={query}  onChange={(e)=>setQuery(e.target.value)} name="" id="" placeholder='search Movies here' />
        
       </form>
       </div>
           
    </div>
    </div>
    // </div>
  )
}

export default Navbar