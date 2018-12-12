import React from 'react';
import cookie from 'react-cookies';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import '../Assets/styling.css';
import UNRAM from '../Assets/logo2.png';
import FormDaftar from './FormDaftar';
import Profile from './Profile';
import Pengumuman from './Pengumuman';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBarNavAdmin from './SideBarNavAdmin';
import Dashboard from './Dashboard';


const titleDashboard = () => {
  return(
    <div>
      Dashboard
    </div>
  )
}
const titlePendaftar = () => {
  return(
    <div>
      Data Pendaftar
    </div>
  )
}
const titlePendaftarVerif = () => {
  return(
    <div>
    Pendaftar Diterima
    </div>
  )
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class SidebarAdmin extends React.Component {
  componentWillMount(){
    if(cookie.load('access') === undefined){
        window.location = "/";
    }
  }

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <img className='logoUnram' src={UNRAM}/>
        <div className='judul'>Beasiswa PPA</div>
        <div className={classes.toolbar} />
        <SideBarNavAdmin/>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="secondary"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              <div>
                <Route path = "/dashboard" component = {titleDashboard} exact/>
                <Route path = "/pendaftar" component = {titlePendaftar}/>
                <Route path = "/pendaftarverif" component = {titlePendaftarVerif}/>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              <div>
                <Route path = "/dashboard" component = {Dashboard}  exact/>
                <Route path = "/pendaftar" component = {Dashboard}/>
                <Route path = "/pebdaftarverif" component = {Dashboard}/>
              </div>
        </main>
      </div>
    );
  }
}

SidebarAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SidebarAdmin);