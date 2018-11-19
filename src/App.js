import React, { Component } from 'react';

import './App.css';
import Header from './tubes/Header';
import Home from './tubes/Home';
import Pernyataan from './tubes/Pernyataan';
import Footer from './tubes/Footer';
import Krs from './tubes/Krs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Krs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
