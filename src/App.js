import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar'
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import Search from './components/search/Search';
import { Action, orginals , ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './components/Urls';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Search title='Search Results'/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={Action} title='Action Movies' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
