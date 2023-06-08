import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Photo from './Photo';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

function App() {
  const [photos, setPhotos] = useState([]);
  const [hasNoPhotos, setHasNoPhotos] = useState(false);

  const [isMessageVisible, setMessageVisible] = useState(true); // definindo as duas variaveis como true

  const toggleDivVisibility = () =>{
    setMessageVisible(!isMessageVisible); // ao acionar funcçao a variavel setmessage se torna diferente de true
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/photos');
      const data = response.data;
      setPhotos(data);
      setHasNoPhotos(data.length === 0);
    } 
    catch (error) {
      console.error('Erro ao obter dados do backend:', error);
    }
  };

  const bufferToImageUrl = (buffer) => {
    const arrayBuffer = new Uint8Array(buffer.data);
    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };

  return (
    <div className='all'>
      <div className='navbar'>
        <Nav/>
      </div>
      <div className='container'>
        {hasNoPhotos ? (
          <div>
              <div id='message' className='row'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                  {isMessageVisible && (
                    <div id='content' className="ui warning message transition visible" style={{width: "20rem"}}>
                      <i class="close icon" onClick={toggleDivVisibility}></i>
                      <div class="header text-center">
                        NOT PHOTOS FOUND
                      </div>
                      <div className='text-center'>
                        Register or submit a drawing
                      </div>
                    </div>
                  )}
                </div>
            </div>
            <div className='post text-center'>
              <Post/>
            </div>
              
          </div>

          ) : (
          <div className='row' id='images'>
            {photos.map((photo) => (
              <div key={photo.id} className='col-md-4'>
                <div className='img'>
                <Photo
                  ImgSrc={bufferToImageUrl(photo.Img)}
                  title={photo.title}
                  description={photo.description}
                />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
