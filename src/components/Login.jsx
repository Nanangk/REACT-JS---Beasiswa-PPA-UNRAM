import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Unram from "../Assets/logo.png";
import '../Assets/styling.css';

const style = {
    width : "750px",
    height : "500px",
    margin : " 100px auto",
    border : "1px solid rgba(255,255,255,.5)",
    position : "relative"
};

const logStyle ={
    width : "200px",
    height : "200px",
    margin : '2em auto',
}


class Login extends Component {
  render() {
    return (
      <div>
          <div className="login" style={style}>
            <img className='logo' src={Unram} alt=""/>
            <h2>PENDAFTARAN BEASISWA PPA</h2>
            <h2 style = {{marginTop : '0px'}}>Universitas Mataram</h2>
            <div style={logStyle}>
                <TextField
                id="outlined-dense"
                label="NIM"
                margin="normal"
                variant="filled"
                />
                <br></br>
                 <TextField
                id="outlined-dense"
                label="Password"
                type="password"
                margin="normal"
                variant="filled"
                />
                <br></br>
                <Button variant="contained" color="primary">
                 Login
                </Button>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
