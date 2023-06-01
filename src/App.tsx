import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { Footer } from './layouts/footer/Footer';
import { HomePage } from './layouts/homepage/homepage';
import { SearchBooksPage } from './layouts/searchbookspage/SearchBooksPage';

export const App = () => {
  return (
    <div className="App">
      <Navbar/>
      {/* <HomePage/> */}
      <SearchBooksPage/>
      <Footer/>
    </div>
  );
}
