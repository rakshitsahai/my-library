import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { ExploreTopBooks } from './homepage/ExploreTopBooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
    </div>
  );
}

export default App;
