import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Photo from './Photo';



function App() {
  return (
    <div>
      <div className='navbar'>
        <Nav/>
      </div>
      <div className='conteudo'>
        <Photo/>
      </div>
    </div>

    
    

    
    
  );
}

export default App;
