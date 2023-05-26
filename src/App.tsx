import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks';
import { Carousel } from './layouts/homepage/Carousel';
import { Heros } from './layouts/homepage/Heros';
import { LibraryServices } from './layouts/homepage/LibraryServices';
import { Footer } from './layouts/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
      <Footer/>
    </div>
  );
}

export default App;
