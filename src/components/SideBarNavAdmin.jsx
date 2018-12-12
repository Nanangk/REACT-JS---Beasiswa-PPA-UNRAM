import React, { Component } from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import cookie from 'react-cookies';

const button = {
    dashboard : 'Dashbord',
    pendaftar : 'Data Pendaftar',
    pendaftarverif : 'Pendaftar Diterima',
  }

class SideBarNavAdmin extends Component {
  constructor(props){
    super(props);
    this.state ={
        nama    :'',
        nim     :''
    }
    this.logout = this.logout.bind(this)
}
logout(){
  cookie.remove('role')
  cookie.remove('user_id')
  cookie.remove('access')
  window.location="/"
}
  render() {
    return (
      <div>
        <div>
          <Divider/>
            <div className="mhs" >ADMIN</div>
          <Divider />
            <List> 
              <NavLink className='navMenu' to='/dashboard'>
                <ListItem button key={button.dashboard}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Dashboard</span>
                </ListItem>
              </NavLink>  
              <NavLink className='navMenu' to='/pendaftar'>
                <ListItem button key={button.pendaftar}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Data Pendaftar</span>
                </ListItem>
              </NavLink> 
              <NavLink className='navMenu' to='/Pendaftarverif'>
                <ListItem button key={button.pendaftarverif}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Pendaftar Diterima</span>
                </ListItem>
              </NavLink> 
            </List>
        </div>
      
        <Divider  />
        {/* LogoutNav */}
        <Divider />
        <List>
           <NavLink className='navMenu' to='/pengumuman'>
              <ListItem button key={button.profile} onClick={this.logout}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Log Out</span>
              </ListItem>
            </NavLink>
            
        </List>
        <Divider />
      </div>
    );
  }
}

export default SideBarNavAdmin;
