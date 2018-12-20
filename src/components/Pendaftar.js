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
function createData(nama, nim, fakultas, sbea, skul, sgaji,kk,krs) {
  id += 1;
  return { id,nama, nim, fakultas, sbea,skul,sgaji,kk,krs };
}

const rows = [
  createData('Nanang Kasim', 'F1D016063','Teknik Informatika','Ada','ada','ada','ada','ada'),
  createData('Mustiari', 'F1D016061','Teknik Informatika','Ada','ada','ada','ada','ada'),
 
];



    
export default class Pendaftar extends React.Component {
  render() {
    return (
      
        
       
      <Table className={Pendaftar}>
        <TableHead>
          <TableRow className="headtabel">
           
            <CustomTableCell align="right">NIM</CustomTableCell>
            <CustomTableCell align="right">Nama</CustomTableCell>
            <CustomTableCell align="right">Fakultas/Prodi</CustomTableCell>
            <CustomTableCell align="right">Surat Beasiswa</CustomTableCell>
            <CustomTableCell align="right">Aktif kuliah</CustomTableCell>
            <CustomTableCell align="right">Slip Gaji</CustomTableCell>
            <CustomTableCell align="right">KK</CustomTableCell>
            <CustomTableCell align="right">KRS/KHS</CustomTableCell>
            <CustomTableCell align="right">Tindakan</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow >
                
               
                <CustomTableCell align="right">{row.nim}</CustomTableCell>
                <CustomTableCell align="right">{row.nama}</CustomTableCell>
                <CustomTableCell align="right">{row.fakultas}</CustomTableCell>
                <CustomTableCell align="right">{row.sbea}</CustomTableCell>
                <CustomTableCell align="right">{row.skul}</CustomTableCell>
                <CustomTableCell align="right">{row.sgaji}</CustomTableCell>
                <CustomTableCell align="right">{row.kk}</CustomTableCell>
                <CustomTableCell align="right">{row.krs}</CustomTableCell>
                <CustomTableCell align="right"><button> terima</button></CustomTableCell>
                <CustomTableCell align="right"><button> Tolak</button></CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  
    );
  }
}

