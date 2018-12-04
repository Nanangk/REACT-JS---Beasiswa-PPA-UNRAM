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


class UploadFile extends React.Component{
    render(){
        return (
            <div>
    
                <Button variant="contained" color="default" className="uploadb" >
                    <div className="upload">Upload</div>
                    <CloudUploadIcon />
                </Button>
                
                <Button variant="contained" color="default" className="uploadb">
                    <div className="upload">Upload</div>
                    <CloudUploadIcon />
                </Button>
                
                <Button variant="contained" color="default" className="uploadb">
                    <div className="upload">Upload</div>
                    <CloudUploadIcon />
                </Button>
                
                <Button variant="contained" color="default">
                    <div className="upload">Upload</div>
                    <CloudUploadIcon />
                </Button>
                
            </div>
        )
    }
   
}

export default UploadFile;
  