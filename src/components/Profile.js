import React from 'react';
import cookie from 'react-cookies';
import swal from 'sweetalert';
import firebase from 'firebase';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import '../Assets/styling.css';
import UploadFile from './UploadFile';
import Foto from '../Assets/DSC_1026.jpg';
import Divider from '@material-ui/core/Divider';



class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            nama    :'',
            nim     :'',
            kode_prodi :'',
            tgl_lahir :'',
            jns_kelamin : '',
            email   :'',
            no_hp   :'',
            // pass    :'',
            foto    :'',
        }
       
    }
    componentWillMount(){
        const self = this
        const getNim = cookie.load('access')
        const databaseRef = firebase.database().ref();
        const todosRef = databaseRef.child("user").child(getNim);
        todosRef.on('value', snap => { 
            
            var jurusannya = '';
            if (snap.val().kode_prodi === '552011') {jurusannya = 'Teknik Informatika';}
            else if (snap.val().kode_prodi === '222011') {jurusannya = 'Teknik Sipil';}
            else if (snap.val().kode_prodi === '202011') {jurusannya = 'Teknik Elektro';}
            else if (snap.val().kode_prodi === '212011') {jurusannya = 'Teknik Mesin';}

         

            if (snap.exists() !== false){
                self.setState({
                    nama    : snap.val().nama,
                    nim     : cookie.load('user_id'),
                    kode_prodi : jurusannya,
                    foto    : snap.val().foto,
                    email   : snap.val().email,
                    no_hp   : snap.val().no_hp,
                    pass    : snap.val().password,
                    tgl_lahir : snap.val().tgl_lahir,
                    jns_kelamin : snap.val().jns_kelamin,
                })
            }else{
                console.log('Data kosong!')
            }
        })
    }

    render(){
        return (
            <div>
            <table className = "highlighted-row">
             <thead>
                <tr>
                <th>Data Mahasiswa</th>
              
                </tr>
            </thead>
            <tbody>
              
                  
                       <tr>
                           <td>Nama</td>
                           <td> 
                             : {this.state.nama}
                           </td>
                       </tr>
                       <tr>
                           <td>NIM</td>
                           <td>
                          : {this.state.nim} 
                           </td>
                       </tr>
                       <tr>
                           <td>Fakultas/Jurusan</td>
                           <td>
                           : {this.state.kode_prodi}
                           </td>
                       </tr>
                      
                       <tr>
                           <td>Jenis Kelamin</td>
                           <td>
                              : {this.state.jns_kelamin} 
                           </td>
                       </tr>
                     
                
                  
               
               </tbody>
            </table>
       </div>
        )
    }
   
}

export default Profile;