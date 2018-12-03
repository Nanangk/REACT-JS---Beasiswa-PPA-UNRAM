import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import '../Assets/styling.css';
import UploadFile from './UploadFile';
import Foto from '../Assets/DSC_1026.jpg';
import Divider from '@material-ui/core/Divider';

class FormDaftar extends React.Component{
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
                                <td>Golongan Darah</td>
                                <td>
                                    <Input value="A" style={{width: 300}}/>
                                </td>
                            </tr>
                            <tr>
                                <td>NIK</td>
                                <td>
                                    <Input value="12901927492183138" style={{width: 300}}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Agama</td>
                                <td>
                                    <Input value="Islam" style={{width: 300}}/>
                                </td>
                            </tr>
                        </td>
                        <td>
                            <img className="foto" src = {Foto}></img>
                        </td>
                    </tr>
                 </table>
                 <Divider color = "secondary" ></Divider>

                 <UploadFile/>
            </div>
            
        )
    }
   
}

export default FormDaftar;
  