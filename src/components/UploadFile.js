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
import cookie from 'react-cookies';
import firebase from 'firebase';
import swal from 'sweetalert';


class UploadFile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            namaFile1:'',
            file1:null,
            statusfile1:false,
            url1:'',

            namaFile2:'',
            file2:null,
            statusfile2:false,
            url2:'',

            namaFile3:'',
            file3:null,
            statusfile3:false,
            url3:'',

            namaFile4:'',
            file4:null,
            statusfile4:false,
            url4:'',

            namaFile5:'',
            file5:null,
            statusfile5:false,
            url5:'',

            NIM:'',
            NAMA:'',
            PRODI:'',

        }
    
        this.file1 = this.file1.bind(this)
        this.file2 = this.file2.bind(this)
        this.file3 = this.file3.bind(this)
        this.file4 = this.file4.bind(this)
        this.file5 = this.file5.bind(this)
        this.submit = this.submit.bind(this)
    
      } 
    

    file1(event){
        const file1 = event.target.files[0];
        this.setState(()=>({file1}));
        let files = event.target.files;
        let reader = new FileReader();

        console.log(event.target.files[0].name);

        if(files[0]!==null){//cekstatus file ada/tidak
            reader.readAsDataURL(files[0]);
            this.setState({ statusfile1 : true })
        }
      
        const storage = firebase.storage();
       
        const uploadFile1 = storage.ref(`file_upload/file1_${cookie.load('user_id')+'.pdf'}`).put(file1);
        uploadFile1.on('state_changed', 
        (snapshot)=>{}, 
        (error)=>{console.log(error)}, 
        ()=>{
            storage.ref('file_upload').child(''+'file1_'+cookie.load('user_id')+'.pdf').getDownloadURL().then(url => {
                console.log(url)
                this.setState({ url1 : url })
               
            })
        });


    }
    file2(event){
        const file1 = event.target.files[0];
        this.setState(()=>({file1}));
        let files = event.target.files;
        let reader = new FileReader();

        console.log(event.target.files[0].name);

        if(files[0]!==null){//cekstatus file ada/tidak
            reader.readAsDataURL(files[0]);
            this.setState({ statusfile1 : true })
        }
      
        const storage = firebase.storage();
       
        const uploadFile1 = storage.ref(`file_upload/file2_${cookie.load('user_id')+'.pdf'}`).put(file1);
        uploadFile1.on('state_changed', 
        (snapshot)=>{}, 
        (error)=>{console.log(error)}, 
        ()=>{
            storage.ref('file_upload').child(''+'file2_'+cookie.load('user_id')+'.pdf').getDownloadURL().then(url => {
                console.log(url)
                this.setState({ url2 : url })
               
            })
        });
        



    }
    file3(event){
        const file3 = event.target.files[0];
        this.setState(()=>({file3}));
        let files = event.target.files;
        let reader = new FileReader();

        console.log(event.target.files[0].name);

        if(files[0]!==null){//cekstatus file ada/tidak
            reader.readAsDataURL(files[0]);
            this.setState({ statusfile3 : true })
        }

        const storage = firebase.storage();
       
        const uploadFile3 = storage.ref(`file_upload/file3_${cookie.load('user_id')+'.pdf'}`).put(file3);
        uploadFile3.on('state_changed', 
        (snapshot)=>{}, 
        (error)=>{console.log(error)}, 
        ()=>{
            storage.ref('file_upload').child(''+'file3_'+cookie.load('user_id')+'.pdf').getDownloadURL().then(url => {
                console.log(url)
                this.setState({ url3 : url })
               
            })
        });
        



    }
    file4(event){
        const file4 = event.target.files[0];
        this.setState(()=>({file4}));
        let files = event.target.files;
        let reader = new FileReader();

        // console.log(event.target.files[0].name);

        if(files[0]!==null){//cekstatus file ada/tidak
            reader.readAsDataURL(files[0]);
            this.setState({ statusfile4 : true })
        }

        const storage = firebase.storage();
       
        const uploadFile4 = storage.ref(`file_upload/file4_${cookie.load('user_id')+'.pdf'}`).put(file4);
        uploadFile4.on('state_changed', 
        (snapshot)=>{}, 
        (error)=>{console.log(error)}, 
        ()=>{
            storage.ref('file_upload').child(''+'file4_'+cookie.load('user_id')+'.pdf').getDownloadURL().then(url => {
                console.log(url)
                this.setState({ url4 : url })
               
            })
        });
        



    }
    file5(event){
        const file5 = event.target.files[0];
        this.setState(()=>({file5}));
        let files = event.target.files;
        let reader = new FileReader();

        console.log(event.target.files[0].name);

        if(files[0]!==null){//cekstatus file ada/tidak
            reader.readAsDataURL(files[0]);
            this.setState({ statusfile5 : true })
        }

        const storage = firebase.storage();
       
        const uploadFile5 = storage.ref(`file_upload/file5_${cookie.load('user_id')+'.pdf'}`).put(file5);
        uploadFile5.on('state_changed', 
        (snapshot)=>{}, 
        (error)=>{console.log(error)}, 
        ()=>{
            storage.ref('file_upload').child(''+'file5_'+cookie.load('user_id')+'.pdf').getDownloadURL().then(url => {
                console.log(url)
                this.setState({ url5 : url })
               
            })
        });
        



    }
    submit(){
        console.log(this.state.url1);
        console.log(this.state.url2);
        console.log(this.state.url3);
        console.log(this.state.url4);
        console.log(this.state.url5);
        const databaseRef = firebase.database().ref();
        const todosRef = databaseRef.child("pendaftaran").child(cookie.load('user_id'));
        if ((this.state.url1==='') || (this.state.url2==='') || (this.state.url3==='') || (this.state.url4==='') || (this.state.url5==='')){
            swal("Oops!", "Ada Berkas yang Belum Di Input!", "error");
        }else{
        todosRef.set({
           file1:this.state.url1,
           file2:this.state.url2,
           file3:this.state.url3,
           file4:this.state.url4,
           file5:this.state.url5,
           NIM:cookie.load('user_id'),
           
          
          
           

        });
        setTimeout(() => {
            
            swal("Success! Anda berhasil mendaftar!", {
                icon: "success",
            });
          }, 3000)
        }
       
    }

    render(){
        return (
           
                <table className = "highlighted-row">
                     <thead>
                        <tr>
                        <th>Upload Kelengkapan Berkas (pdf)</th>
                    
                        </tr>
                </thead>
                <tbody>
                
                  
                       <tr>
                           <td> 1. Keterangan Tidak Menerima Beasiswa</td>
                           <td> 
                              <input type="file" name='file1' onChange={(event)=>this.file1(event)} className="form-control"/>
                           </td>
                       </tr>
                       <tr>
                           <td> 2. Keterangan Aktif Kuliah </td>
                           <td>
                          <input type="file" name='file2' onChange={(event)=>this.file2(event)} className="form-control"/>
                           </td>
                       </tr>
                       <tr>
                           <td> 3. Slip Gaji Orang Tua</td>
                           <td>
                           <input type="file" name='file3' onChange={(event)=>this.file3(event)} className="form-control"/>
                           </td>
                       </tr>
                      
                       <tr>
                           <td> 4. Kartu keluarga</td>
                           <td>
                              <input type="file" name='file4' onChange={(event)=>this.file4(event)} className="form-control"/>
                           </td>
                       </tr>

                       
                       <tr>
                           <td>  5. KRS/KHS/Transkrip Nilai</td>
                           <td>
                              <input type="file" name='file5' onChange={(event)=>this.file5(event)} className="form-control"/>
                           </td>
                       </tr>
                       <tr align="center" >
                      
                       <div className="uploadb">
                             <Button onClick={this.submit} variant="contained" color="secondary">
                                <div className="upload">  {this.state.loading ? "Submiting..." : "Submit"}</div>
                                <CloudUploadIcon />
                            </Button>
                    </div>
                   
                    </tr>
                       
                     
                
                  
               
               </tbody>
            </table>
               
        )
    }
   
}

export default UploadFile;
  