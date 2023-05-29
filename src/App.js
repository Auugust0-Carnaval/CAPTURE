import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Photo from './Photo';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className='all'>
      <div className='navbar'>
        <Nav/>
      </div>
      <div className='conteudo'>
        <Photo
          ImgSrc={'https://th.bing.com/th/id/OIP.eTVndpHCHWfCB5qzx6EQBQHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7'}
          title={'Adveture Time'}
          description={'My favorite cartoon'}/>
      </div>
    </div>
  );
}

export default App;
