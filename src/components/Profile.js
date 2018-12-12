import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import '../Assets/styling.css';
import UploadFile from './UploadFile';
import Foto from '../Assets/DSC_1026.jpg';
import Divider from '@material-ui/core/Divider';



class Profile extends React.Component{
    render(){
        return (
            <div>
            <table>
               <tr>
                   <td>
                       <tr>
                           <td>Nama</td>
                           <td> 
                               <Input value="Mustiari" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>NIM</td>
                           <td>
                           <Input value="F1D016061" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>Fakultas/Jurusan</td>
                           <td>
                           <Input value="Teknik/Teknik Informatika" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>Tanggal Lahir</td>
                           <td>
                               <Input value="28 Februari 1997" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>Jenis Kelamin</td>
                           <td>
                               <Input value="Laki-laki" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>No. Hp</td>
                           <td>
                               <Input value="087863593921" style={{width: 300}}/>
                           </td>
                       </tr>
                       <tr>
                           <td>Email</td>
                           <td>
                               <Input value="patriajimaulana@gmail.com" style={{width: 300}}/>
                           </td>
                       </tr>
                   </td>
                   <td>
                       <img className="foto" src = {Foto}></img>
                   </td>
               </tr>
            </table>
       </div>
        )
    }
   
}

export default Profile;