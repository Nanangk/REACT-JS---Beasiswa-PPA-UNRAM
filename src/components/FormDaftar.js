import React from 'react';
import UploadFile from './UploadFile';
import Divider from '@material-ui/core/Divider';
import Profile from './Profile';

class FormDaftar extends React.Component{
    render(){
        return (
            <div>
                <Profile/>
                <Divider color = "secondary" ></Divider>
                <UploadFile/>

            </div>
            
        )
    }
   
}

export default FormDaftar;
  