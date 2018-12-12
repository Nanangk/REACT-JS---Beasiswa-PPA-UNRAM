import React, { Component } from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom';

const button = {
  profile : 'Profile',
  daftar : 'Daftar',
  Pengumuman : 'pengumuman',
}

class SideBarNav extends Component {
  render() {
    return (
      <div>
        <Divider />
          <List> 
            <NavLink className='navMenu' to='/'>
              <ListItem button key={button.profile}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Profile</span>
              </ListItem>
            </NavLink>  
            <NavLink className='navMenu' to='/daftar'>
              <ListItem button key={button.profile}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Daftar</span>
              </ListItem>
            </NavLink> 
            <NavLink className='navMenu' to='/pengumuman'>
              <ListItem button key={button.profile}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Pengumuman</span>
              </ListItem>
            </NavLink> 
          </List>
        <Divider  />
        {/* LogoutNav */}
        <Divider />
        <List>
           <NavLink className='navMenu' to='/pengumuman'>
              <ListItem button key={button.profile}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Log Out</span>
              </ListItem>
            </NavLink>
        </List>
        <Divider />
      </div>
    );
  }
}

export default SideBarNav;
