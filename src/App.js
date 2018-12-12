import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import {DB_CONFIG} from './config';
import firebase from 'firebase';
import cookie from 'react-cookies';
import swal from 'sweetalert';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar';
import SidebarAdmin from './components/SidebarAdmin';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role : 0
    };
  }

  componentWillMount(){

    firebase.initializeApp(DB_CONFIG);
    if (cookie.load('access') !== undefined && cookie.load('role') === '1') {
      this.setState({role : 1})
      swal("Hello!", "Selamat datang di e-SKKE!", "success");
    }
    if (cookie.load('access') !== undefined && cookie.load('role') === '2') {
      this.setState({role : 2})
      swal("Hello!", "Selamat datang di e-SKKE!", "success");
    }
  }

  render() {
    const {role} = this.state
    let content = null
    if (role === 0) {
      content =
        <div id="wrapper" className="wrapper">
          <Route exact path="/" component={Login}/>
        </div>
        console.log(DB_CONFIG.databaseURL);
    }else if (role === 1){
      content =
        <div id="wrapper">
        {/* <Route exact path="/" component={Sidebar}/> */}
          <Sidebar/>
        
        </div>
        console.log(DB_CONFIG.databaseURL);
    }
    else if (role === 2){
      content =
        <div id="wrapper">
          <SidebarAdmin/>
        </div>
   }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
