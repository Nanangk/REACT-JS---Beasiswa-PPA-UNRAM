import React, { Component } from 'react';

import axios from 'axios';
import cookie from 'react-cookies';
import swal from 'sweetalert';
import firebase from 'firebase';

import sidebar from './Sidebar.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Unram from "../Assets/logo.png";
import '../Assets/styling.css';

const style = {
    height:'753px'
   
};

const logStyle ={
    
    width : "300px",
    height : "300px",
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

  handleSubmit (){
    const self = this
    self.setState({ loading: true })
    // event.preventDefault()
    const databaseRef = firebase.database().ref();
    if (this.state.username !== undefined && this.state.password !== '') {
        if (this.state.username.length === 9 && this.state.username.slice(0, 2) === 'F1') {
            const todosRef = databaseRef.child("user").child(this.state.username);
            
            todosRef.on('value', snap => {
                if (snap.exists() !== false) {
                    console.log(snap.val().password)
                    if (snap.val().password === this.state.password) {
                        cookie.save('user_id', this.state.username, {
                            path: '/'
                        })
                        cookie.save('access', this.state.username, {
                            path: '/'
                        })
                        cookie.save('role', 1, {
                            path: '/'
                        })
                        setTimeout(() => {
                            window.location = "/home";
                        }, 0);
                    } else if (snap.val().password !== this.state.password) {
                        this.setState({
                            loading: false
                        })
                        swal("Oops!", "Password salah!", "error");
                    }
                } else {
                    axios.post('https://app-1527612087.000webhostapp.com/api_sia/?nim=' + this.state.username)
                        .then(function (response) {
                            if (response.data !== 'kosong') {
                                console.log(response.data);
                                cookie.save('user_id', response.data.student.NIM, {
                                    path: '/'
                                })
                                cookie.save('access', response.data.student.NIM, {
                                    path: '/'
                                })
                                cookie.save('role', 1, {
                                    path: '/'
                                })
                                setTimeout(() => {
                                    todosRef.set({
                                        foto: response.data.student.foto,
                                        jurusan: response.data.student.kode_prodi,
                                        password: response.data.student.NIM,
                                        nama: response.data.student.nama,
                                        tgl_lahir: response.data.student.tgl_lahir,
                                        jns_kelamin: response.data.student.jns_kelamin,
                                        email: response.data.student.email,
                                        no_hp: response.data.student.no_hp,
                                        kode_agama: response.data.student.kode_agama,

                                    });
                                }, 0);
                                window.location = "/home";
                            } else {
                                this.setState({
                                    loading: false
                                })
                                swal("Oops!", "Username atau Password salah!", "error");
                            }
                        })
                        .catch(function (error) {
                            self.setState({
                                loading: false,
                                nip: '',
                                password: ''
                            })
                            console.log(error);
                        });
                }
            });
        } else if (this.state.username.slice(0,2) !== 'F1') {
            const todosRef = databaseRef.child("user").child(this.state.username);
            todosRef.on('value', snap => {
                console.log(snap.val().password)
                if (snap.exists() !== false) {
                    if (snap.val().password === this.state.password) {
                        cookie.save('user_id', this.state.username, {
                            path: '/'
                        })
                        cookie.save('access', this.state.username, {
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

    handleChangeNIM(event){this.setState({username : event.target.value});}
    handleChangePassword(event){this.setState({password : event.target.value})}
  render() {
    return (
      <div>
          <div className="login" style={style}>
           
            <div className="kotaklogin">
            <img className='logo' src={Unram} alt=""/>
            <h3>PENDAFTARAN BEASISWA PPA</h3>
            <h3 style = {{marginTop : '0px'}}>Universitas Mataram</h3>
            <div style={logStyle}>
                {/* <form onSubmit={this.handleSubmit}>        */}
                    <TextField className="kotak"                    
                    d="outlined-dense"
                    label="NIM"
                    margin="normal"
                    variant="filled"
                    name="username"
                    onChange={this.handleChangeNIM}
                    />
                    <br></br>
                    <TextField className="kotak"
                    id="outlined-dense"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="filled"
                    name="password"
                    onChange={this.handleChangePassword}

                    />
                    <br></br>
                    <br></br>
                    <div className="tombol">
                    <Button onClick={this.handleSubmit}  type="submit">
                        Login
                    </Button>
                    </div>
                {/* </form> */}
                <div className="lupa">
                  <a href="">Lupa password?</a>
                  
                </div>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
