import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import '../Assets/styling.css';
import Typography from '@material-ui/core/Typography';


class UploadFile extends React.Component{
    render(){
        return (
            <div>   
               <Typography variant="h6" color="inherit" noWrap>
                    Upload Kelengkapan Berkas :
              </Typography>
              <Typography variant="h7" color="inherit" noWrap>
                    <div>
                        1. Keterangan Tidak Menerima Beasiswa
                    </div> 
                    <div>
                        2. Keterangan Aktif Kuliah
                    </div> 
                    <div>
                        3. Slip Gaji Orang Tua
                    </div> 
                    <div>
                        4. Keterangan Tidak Menerima Beasiswa
                    </div>
              </Typography>
                <div className="uploadb">
                    <Button variant="contained" color="secondary">
                        <div className="upload">Upload File 1</div>
                        <CloudUploadIcon />
                    </Button>
                </div>
                <div className="uploadb">
                    <Button variant="contained" color="secondary">
                        <div className="upload">Upload File 2</div>
                        <CloudUploadIcon />
                    </Button>
                </div>
                <div className="uploadb">
                    <Button variant="contained" color="secondary">
                        <div className="upload">Upload File 3</div>
                        <CloudUploadIcon />
                    </Button>
                </div>
                <div className="uploadb">
                    <Button variant="contained" color="secondary">
                        <div className="upload">Upload File 4</div>
                        <CloudUploadIcon />
                    </Button>
                </div>  
            </div>
        )
    }
   
}

export default UploadFile;
  