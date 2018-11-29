import React, {Component} from 'react'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

let style = {
  width : "30em"
}

class Home extends Component {
  state = {
    open: false,
    name: '',
    ptn: '',
    nim: '',
    prodi: '',
    alamat: '',
    semester: '',
    angkatan: '',
    jk: '',

  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              PPA
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Dashboard', 'Pendaftaran', 'Pengumaman', 'Logout'].map((text, index) => (
              <ListItem button key={text}>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <h1>FORMULIR PENDAFTARAN</h1>
          
          <form>
            <div>
                <TextField
                  id="filled-ptn"
                  label="Perguruan Tinggi"
                  className={classes.textField}
                  value={this.state.ptn}
                  onChange={this.handleChange('ptn')}
                  margin="normal"
                  variant="filled"
                  style={style}
                />
              </div>
                
              <div>
                <TextField
                  id="filled-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="filled"
                  style={style}
                  />
              </div>
              <div>
                 <TextField
                  id="filled-nim"
                  label="NIM"
                  className={classes.textField}
                  value={this.state.NIM}
                  onChange={this.handleChange('NIM')}
                  margin="normal"
                  variant="filled"
                  style={style}
                  />
              </div>
              
              <div>
                  <TextField
                    id="filled-prodi"
                    label="Prodi"
                    className={classes.textField}
                    value={this.state.prodi}
                    onChange={this.handleChange('prodi')}
                    margin="normal"
                    variant="filled"
                    style={style}
                    />
               </div>
              <div>
                  <TextField
                    id="filled-alamat"
                    label="Alamat"
                    className={classes.textField}
                    value={this.state.alamat}
                    onChange={this.handleChange('alamat')}
                    margin="normal"
                    variant="filled"
                    style={style}
                    />
               </div>
               <div>
                  <TextField
                    id="filled-semester"
                    label="Semester"
                    className={classes.textField}
                    value={this.state.semester}
                    onChange={this.handleChange('semester')}
                    margin="normal"
                    variant="filled"
                    style={style}
                  />
             </div>
             <div>
                <TextField
                  id="filled-angkatan"
                  label="Angkatan"
                  className={classes.textField}
                  value={this.state.angkatan}
                  onChange={this.handleChange('angkatan')}
                  margin="normal"
                  variant="filled"
                  style={style}
                  />
              </div>
              <div>
                <TextField
                  id="filled-jk"
                  label="Jenis Kelamin"
                  className={classes.textField}
                  value={this.state.jk}
                  onChange={this.handleChange('jk')}
                  margin="normal"
                  variant="filled"
                  style={style}
                  />
                </div>   
          </form>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);