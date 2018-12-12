import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import {DB_CONFIG} from './config';
import firebase from 'firebase';


import Header from './components/Header';
import Home from './components/Home';
import Pernyataan from './components/Pernyataan';
import Footer from './components/Footer';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar';
import Pengumuman from './components/Pengumuman';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role : 0
    };
  }

  componentWillMount(){
    firebase.initializeApp(DB_CONFIG);
    // if (cookie.load('access') !== undefined && cookie.load('role') === '1') {
    //   this.setState({role : 1})
    //   swal("Hello!", "Selamat datang di e-SKKE!", "success");
    // }
    // if (cookie.load('access') !== undefined && cookie.load('role') === '2') {
    //   this.setState({role : 2})
    //   swal("Hello!", "Selamat datang di e-SKKE!", "success");
    // }
    // if (cookie.load('access') === undefined && cookie.load('role') === undefined && window.location.pathname !== '/') {this.setState({role : 0})}
    // if(cookie.load('role') === undefined && window.location.pathname !== '/') {window.location = "/"}
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
    // }else if (role === 1){
    //   content =
    //     <div id="wrapper">
    //       <Navbar/>
    //       <SidebarMhs/>
    //       <Route exact path="/" component={Home}/>
    //       <Route exact path="/dashboard" component={Home}/>
    //       <Route exact path="/pencapaian" component={Pencapaian}/>
    //       <Route exact path="/waiting_list" component={WaitingList}/>
    //       <Route exact path="/upload" component={Upload}/>
    //       <Route exact path="/print" component={KRK}/>
    //       <div className="clearfix"></div>
		//       <footer>
    //         <Footer/>
    //       </footer>
    //     </div>
    // }else if (role === 2){
    //   content =
    //     <div id="wrapper">
    //       <NavbarAdmin/>
    //       <SidebarAdmin/>
    //       <Route exact path="/" component={HomeAdmin}/>
    //       <Route exact path="/dashboard" component={HomeAdmin}/>
    //       <Route exact path="/waiting_list" component={WaitingListAdmin}/>
		//       <footer>
    //         <Footer/>
    //       </footer>
    //     </div>
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
