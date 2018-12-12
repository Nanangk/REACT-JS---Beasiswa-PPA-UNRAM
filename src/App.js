import React, { Component } from 'react';

// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Pernyataan from './components/Pernyataan';
import Footer from './components/Footer';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Pengumuman from './components/Pengumuman';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default App;
