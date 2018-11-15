import React, { Component } from 'react';

import './App.css';
import Header from './tubes/Header';
import Home from './tubes/Home';
import Footer from './tubes/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
