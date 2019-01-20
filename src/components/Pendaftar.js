import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
  
export default class Pendaftar extends React.Component {
  render(){
    return (
      <div>
      <table className = "zebra-table">
      <thead>
          <tr>
          <th>No</th>
          <th>NIM</th>
          <th>Nama</th>
          <th>Fakultas/Prodi</th>
          <th>Surat Beasiswa</th>
          <th>Aktif Kuliah</th>
          <th>KK</th>
          <th>KRS/KHS</th>
          <th>Tindakan</th>
          </tr>
      </thead>
      <tbody>
          <tr>
          <td>1</td>
          <td>F1D016063</td>
          <td>Nanang Kasim</td>
          <td>Teknik Informatika</td>
          <td>ada</td>
          <td>ada</td>
          <td>ada</td>
          <td>ada</td>
          <td>tombol</td>

          </tr>
         
       </tbody>
        
      </table>
 </div>
       
    )
}

}

