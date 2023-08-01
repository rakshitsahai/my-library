import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar/Navbar';
import { Footer } from './layouts/footer/Footer';
import { HomePage } from './layouts/homepage/homepage';
import { SearchBooksPage } from './layouts/searchbookspage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
