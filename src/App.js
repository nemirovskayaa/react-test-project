//import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import PopUp from './components/PopUp';
import Album from './components/Album';

const urlTitles = "https://jsonplaceholder.typicode.com/albums/";

const  App = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [titles, setTitles] = useState();
  const [albumID, setAlbumID] = useState(0);
  
  
  const getApiData = async () => {
    try {
    const response = await fetch(urlTitles).then((response) => response.json());
    setTitles(response);
  } catch (error) {
    console.error(error);
  }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className='app-wrapper'>
     <Header />

      <div className='grid'>
        {titles &&
          titles.map((title) => (
            <Album setPopUpOpen={setPopUpOpen} setAlbumID={setAlbumID} title={title}/>
          ))}
      </div>

      <PopUp isOpen={popUpOpen} setIsOpen={setPopUpOpen} albumID={albumID}/>
     </div>
  );
}

export default App;
