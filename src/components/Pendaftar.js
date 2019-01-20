import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import pdf from '../Assets/pdf.png'
  
export default class Pendaftar extends React.Component {

    constructor(){
        super();
        this.state = {
        
            NIM : [],
           file1 : [],
           file2 : [],
           file3 : [],
           file4 : [],
           file5 : [],
           table : ''
        };
       }
     componentDidMount(){
        const rootRef = firebase.database().ref();
        const pasienRef = rootRef.child('pendaftaran');
         pasienRef.once('value', snap => {
         snap.forEach( row => {
               this.setState({
                
                 NIM: this.state.NIM.concat([row.val().NIM]),
                 file1: this.state.file1.concat([row.val().file1]),
                 file2: this.state.file2.concat([row.val().file2]),
                 file3: this.state.file3.concat([row.val().file3]),
                 file4: this.state.file4.concat([row.val().file4]),
                 file5: this.state.file5.concat([row.val().file5]),
                 
               });
         });
           const tableList = this.state.NIM.map((NIM, index) =>
             <tr>
              
               <td>{this.state.NIM[index]}</td>
               <td><a href={this.state.file1[index]}><b><img className="pdficon" src={pdf} alt="Surat Keterangan Tidak Menerima Beasiswa" /></b></a></td>
               <td><a href={this.state.file2[index]}><b><img className="pdficon" src={pdf} alt="Surat Keterangan Aktif Kuliah" /></b></a></td>
               <td><a href={this.state.file3[index]}><b><img className="pdficon" src={pdf} alt="Slip Gaji Orang Tua" /></b></a></td>
               <td><a href={this.state.file4[index]}><b><img className="pdficon" src={pdf} alt="Kartu Keluarga" /></b></a></td>
               <td><a href={this.state.file5[index]}><b><img className="pdficon" src={pdf} alt="KRS/KHS" /></b></a></td>
               <td></td>
               
             </tr>
           );
           this.setState({
             table : tableList
           })
         });
       };
  render(){
   
    return (
      <div>
      <table className = "zebra-table">
      <thead>
          <tr>
          <th>NIM</th>
          <th>Surat Beasiswa</th>
          <th>Aktif Kuliah</th>
          <th>Slip Gaji</th>
          <th>KK</th>
          <th>KRS/KHS</th>
          <th>Tindakan</th>
          </tr>
      </thead>
      <tbody>
      {this.state.table}

         
       </tbody>
        
      </table>
 </div>
       
    )
}

}

