import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import style from '../asset/css/style.css';


class Jmtron extends React.Component {
    render(){
    return (
   
    <div className={style.Jumbotron}>
       
      <Jumbotron >
          
        
        <h1>Pendaftaran Beasiswa PPA</h1>
        <p className="lead">Cara mudah bagi mahasiswa untuk melakukan pendaftaran beasiswa PPA secara cepat kapanpun dan dimanapun.</p>
        <hr className="my-2" />
        <p>Pendaftaran mulai dibuka pada tanggal 1 Desember 2020 s/d 32 Desember 2020</p>
        <p className="lead">
          <Button color="primary">Daftar</Button>
        </p>
      </Jumbotron>
     
    </div>
  );
    }
};

export default Jmtron;