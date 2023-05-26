import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { Footer } from './layouts/footer/Footer';
import { HomePage } from './layouts/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
