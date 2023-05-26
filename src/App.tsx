import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks';
import { Carousel } from './layouts/homepage/Carousel';
import { Heros } from './layouts/homepage/Heros';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
    </div>
  );
}

export default App;
