import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import '../Assets/styling.css';


class Profile extends React.Component{
    render(){
        return (
            <div>
                 <table>
                    <tr>
                        <td>Nama</td>
                        <td> 
                            <Input value="ABD HARIS KUSNADI" style={{width: 300 }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>NIM</td>
                        <td>
                          <Input value="F1D016002" style={{width: 300}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>
                            <Input value="05 April 1998" style={{width: 300}}/>
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
                            <Input value="AB+" style={{width: 300}}/>
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
                 </table>

                 
            </div>
            
        )
    }
   
}

export default Profile;