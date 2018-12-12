import React, { Component } from 'react';

import axios from 'axios';
import cookie from 'react-cookies';
import swal from 'sweetalert';
import firebase from 'firebase';

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
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        cekDB: '',
        loading: false,    }

    this.handleChangeNIM = this.handleChangeNIM.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  } 

  handleChangeNIM(event){
    this.setState({ username: event.target.value })
  }

  handleChangePassword(event){
    this.setState({ password: event.target.value })
  }

  handleSubmit (){
    console.log(this.state.username)    // const self = this
    // self.setState({ loading: true })
    // event.preventDefault()
    const databaseRef = firebase.database().ref();
    if (this.state.username !== undefined && this.state.password !== '') {
        if (this.state.username.length === 9 && this.state.username.slice(0, 2) === 'F1') {
            const todosRef = databaseRef.child("user").child(this.state.username);
            todosRef.on('value', snap => {
                if (snap.exists() !== false) {
                  
                    if (snap.val().password === this.state.password) {
                        cookie.save('user_id', this.state.nim, {
                            path: '/'
                        })
                        cookie.save('access', this.state.nim, {
                            path: '/'
                        })
                        cookie.save('role', 1, {
                            path: '/'
                        })
                        setTimeout(() => {
                            window.location = "/dashboard";
                        }, 0);
                    } else if (snap.val().password !== this.state.password) {
                        this.setState({
                            loading: false
                        })
                        swal("Oops!", "Password salah!", "error");
                    }
                // } else {
                //     axios.post('https://app-1527612087.000webhostapp.com/api_sia/?nim=' + this.state.nim)
                //         .then(function (response) {
                //             if (response.data !== 'kosong') {
                //                 // console.log(response.data);
                //                 cookie.save('user_id', response.data.student.NIM, {
                //                     path: '/'
                //                 })
                //                 cookie.save('access', response.data.student.NIM, {
                //                     path: '/'
                //                 })
                //                 cookie.save('role', 1, {
                //                     path: '/'
                //                 })
                //                 setTimeout(() => {
                //                     todosRef.set({
                //                         kke: 0,
                //                         foto: response.data.student.foto,
                //                         jurusan: response.data.student.kode_prodi,
                //                         password: response.data.student.NIM,
                //                         nama: response.data.student.nama,
                //                         email: response.data.student.email,
                //                         no_hp: response.data.student.no_hp
                //                     });
                //                 }, 0);
                //             } else {
                //                 this.setState({
                //                     loading: false
                //                 })
                //                 swal("Oops!", "Username atau Password salah!", "error");
                //             }
                //         })
                //         .catch(function (error) {
                //             self.setState({
                //                 loading: false,
                //                 nip: '',
                //                 password: ''
                //             })
                //             console.log(error);
                //         });
                }
            });
        } else if (this.state.nim.length >= 10) {
            const todosRef = databaseRef.child("user").child(this.state.nim);
            todosRef.on('value', snap => {
                if (snap.exists() !== false) {
                    if (snap.val().password === this.state.password) {
                        cookie.save('user_id', this.state.nim, {
                            path: '/'
                            // expires: new Date(Date.now()+2592000)
                        })
                        cookie.save('access', this.state.nim, {
                            path: '/'
                        })
                        cookie.save('role', 2, {
                            path: '/'
                        })
                        setTimeout(() => {
                            window.location = "/dashboard";
                        }, 0);
                    } else if (snap.val().password !== this.state.password) {
                        this.setState({
                            loading: false
                        })
                        swal("Oops!", "Password salah!", "error");
                    }
                } else {
                    this.setState({
                        loading: false
                    })
                    swal("Oops!", "Username atau Password salah!", "error");
                }
            })
        }
        else {
            this.setState({
                loading: false
            })
            swal("Oops!", "Username atau Password salah!", "error");
        }
    } else {
        this.setState({
            loading: false
        })
        swal("Oops!", "Username atau Password salah!", "error");
    }
}

  render() {
    return (
      <div>
          <div className="login" style={style}>
            <img className='logo' src={Unram} alt=""/>
            <h2>PENDAFTARAN BEASISWA PPA</h2>
            <h2 style = {{marginTop : '0px'}}>Universitas Mataram</h2>
            <div style={logStyle}>
                <form onSubmit={this.andleSubmit}>       
                    <TextField                    
                    d="outlined-dense"
                    label="NIM"
                    margin="normal"
                    variant="filled"
                    name="username"
                    onChange={this.handleChangeNIM}
                    />
                    <br></br>
                    <TextField
                    id="outlined-dense"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="filled"
                    name="password"
                    onChange={this.handleChangePassword}
                    />
                    <br></br>
                    <Button variant="contained" color="secondary" type="submit">
                    Login
                    </Button>
                </form>
                <div className="lupa">
                  <a href="">Lupa password?</a>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
