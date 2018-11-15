import React, { Component } from 'react';
import Header from './PPA/header';
import Jmtron from './PPA/jmtron';
import style from './asset/css/style.css';



class App extends Component {
  render() {
    return (
      <div className={style.all}>
         <Header/>
         <Jmtron/>
        
      </div>
    );
  }
}

export default App;
