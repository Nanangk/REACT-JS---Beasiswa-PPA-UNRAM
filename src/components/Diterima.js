import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(no, nama, nim, fakultas, sbea, skul, sgaji,aksi) {
  id += 1;
  return { id, no, nama, nim, fakultas, sbea,skul,sgaji,aksi };
}

const rows = [
  createData(1,'Nanang Kasim', 'F1D016063','Teknik Informatika','Ada','ada','ada','terima/tidak'),
  createData(2,'Mustiari', 'F1D016061','Teknik Informatika','Ada','ada','ada','terima/tidak'),
  createData(3,'Patriaji', 'F1D016075','Teknik Informatika','Ada','ada','ada','terima/tidak'),
  createData(4,'Mega Laely', 'F1D016054','Teknik Informatika','Ada','ada','ada','terima/tidak'),
  createData(5,'Abd. Haris kurusnadi', 'F1D016010','Teknik Informatika','Tidak Ada','ada','ada','terima/tidak'),
];



    
export default class Pendaftar extends React.Component {
  render() {
    return (
      
        
       
      <Table className={Pendaftar}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="right">No</CustomTableCell>
            <CustomTableCell align="right">Nama</CustomTableCell>
            <CustomTableCell align="right">NIM</CustomTableCell>
            <CustomTableCell align="right">Fakultas/Prodi</CustomTableCell>
            <CustomTableCell align="right">Surat Beasiswa</CustomTableCell>
            <CustomTableCell align="right">Aktif kuliah</CustomTableCell>
            <CustomTableCell align="right">Slip Gaji</CustomTableCell>
            <CustomTableCell align="right">Tindakan</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow >
                
                <CustomTableCell align="right">{row.no}</CustomTableCell>
                <CustomTableCell align="right">{row.nama}</CustomTableCell>
                <CustomTableCell align="right">{row.nim}</CustomTableCell>
                <CustomTableCell align="right">{row.fakultas}</CustomTableCell>
                <CustomTableCell align="right">{row.sbea}</CustomTableCell>
                <CustomTableCell align="right">{row.skul}</CustomTableCell>
                <CustomTableCell align="right">{row.sgaji}</CustomTableCell>
                <CustomTableCell align="right">{row.aksi}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  
    );
  }
}

