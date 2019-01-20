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
import swal from 'sweetalert';

const button = {
  profile : 'Profile',
  daftar : 'Daftar',
  Pengumuman : 'pengumuman',
}

class SideBarNav extends Component {
  constructor(props){
    super(props);
    this.state ={
        nama    :'',
        nim     :''
    }
    // this.logout = this.logout.bind(this)
}
handleLogout= () =>{
  swal({
      title: "Anda ingin logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          cookie.remove('user_id')
          cookie.remove('access')
          cookie.remove('role')
          window.location = "/";
      } else {
        }
    });
}
  render() {
    return (
      <div>
        <div>
          <Divider/>
            <div className="mhs" >MAHASISWA</div>
          <Divider />
            <List> 
              <NavLink className='navMenu' to='/home'>
                <ListItem button key={button.profile}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Profile</span>
                </ListItem>
              </NavLink>  
              <NavLink className='navMenu' to='/daftar'>
                <ListItem button key={button.daftar}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Daftar</span>
                </ListItem>
              </NavLink> 
              <NavLink className='navMenu' to='/pengumuman'>
                <ListItem button key={button.pengumuman}>
                <MailIcon/><span style={{marginLeft : '2em'}}>Pengumuman</span>
                </ListItem>
              </NavLink> 
            </List>
        </div>
       
        <Divider  />
        {/* LogoutNav */}
        <Divider />
        <List>
          
              <ListItem button key={button.profile} onClick={this.handleLogout}>
              <MailIcon/><span style={{marginLeft : '2em'}}>Log Out</span>
              </ListItem>
          
            
        </List>
        <Divider />
      </div>
    );
  }
}

export default SideBarNav;
