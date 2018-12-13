import React from 'react';
import { Table } from 'reactstrap';
import styling from '../Assets/styling.css';

    
export default class Pendaftar extends React.Component {
  render() {
    return (
      <Table className="diterima">
        
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Aksi</th>
          </tr>
       
       
      </Table>
    );
  }
}