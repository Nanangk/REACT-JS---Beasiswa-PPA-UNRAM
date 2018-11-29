import React, { Component } from 'react';

// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Pernyataan from './components/Pernyataan';
import Footer from './components/Footer';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/>
        <Home/>
        <Pernyataan/>
        <Footer/> */}
        <Login></Login>
      </div>
    );
  }
}

export default App;
