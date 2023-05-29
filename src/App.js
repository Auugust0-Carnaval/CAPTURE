import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Photo from './Photo';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/photos');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Erro ao obter dados do backend:', error);
    return [];
  }
};

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData();
      setPhotos(data);
    }
    fetchDataAsync();
  }, []);

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
      <div className='row'>
        {photos.map((photo) => (
          <div key={photo.id} className='col-md-6'>
            <Photo
              ImgSrc={bufferToImageUrl(photo.Img)}
              title={photo.title}
              description={photo.description}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
