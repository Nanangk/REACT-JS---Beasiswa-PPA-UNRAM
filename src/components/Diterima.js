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
import pdf from '../Assets/pdf.png';
import accept from '../Assets/cancel.png';
import swal from 'sweetalert';
import cookie from 'react-cookies';
  
export default class Pendaftar extends React.Component {

    constructor(){
        super();
        this.state = {
        
            nim : [],
           berkas1 : [],
           berkas2 : [],
           berkas3 : [],
           berkas4 : [],
           berkas5 : [],
           table : ''
        };
       }

       cancel(key){
        swal({
            title: "Pilih OK untuk membatalkan penerima",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var todosRef = firebase.database().ref().child("penerima").child(key);
                todosRef.remove();
                swal("Success! Anda berhasil membatalkan penerima!", {
                    icon: "success",
                });
            } else {}
          });
    }

     componentDidMount(){
        const rootRef = firebase.database().ref();
        const pasienRef = rootRef.child('penerima');
         pasienRef.once('value', snap => {
         snap.forEach( row => {
               this.setState({
                
                 nim: this.state.nim.concat([row.val().nim]),
                 berkas1: this.state.berkas1.concat([row.val().berkas1]),
                 berkas2: this.state.berkas2.concat([row.val().berkas2]),
                 berkas3: this.state.berkas3.concat([row.val().berkas3]),
                 berkas4: this.state.berkas4.concat([row.val().berkas4]),
                 berkas5: this.state.berkas5.concat([row.val().berkas5]),
                 
               });
         });
           const tableList = this.state.nim.map((nim, index) =>
             <tr>
                 
               <td>{this.state.nim[index]}</td>
               <td><a href={this.state.berkas1[index]}><b><img className="pdficon" src={pdf} alt="Surat Keterangan Tidak Menerima Beasiswa" /></b></a></td>
               <td><a href={this.state.berkas2[index]}><b><img className="pdficon" src={pdf} alt="Surat Keterangan Aktif Kuliah" /></b></a></td>
               <td><a href={this.state.berkas3[index]}><b><img className="pdficon" src={pdf} alt="Slip Gaji Orang Tua" /></b></a></td>
               <td><a href={this.state.berkas4[index]}><b><img className="pdficon" src={pdf} alt="Kartu Keluarga" /></b></a></td>
               <td><a href={this.state.berkas5[index]}><b><img className="pdficon" src={pdf} alt="KRS/KHS" /></b></a></td>
               <td>  <img onClick={ this.cancel.bind(null,this.state.nim[index])} className="accicon" src={accept} alt="KRS/KHS" /></td>
               
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

