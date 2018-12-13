import React from 'react';
import { Table } from 'reactstrap';
import styling from '../Assets/styling.css';

    
export default class Pendaftar extends React.Component {
  render() {
    return (
      <Table className="pendaftar">
        
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Fakultas/Prodi</th>
            <th>Surat Beasiswa</th>
            <th>Aktif kuliah</th>
            <th>Slip gaji</th>
            <th>Aksi</th>
          </tr>
       
       
      </Table>
    );
  }
}