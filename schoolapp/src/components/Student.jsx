import React from 'react';
import {Row,Grid,Col } from 'react-bootstrap';
import { TextField, Input, MenuItem, Select, Paper, Button, IconButton, Card, Dialog, DialogTitle, DialogActions, DialogContent, Divider } from '@material-ui/core';
import '../common/scss/student.scss';
import Webcam from "react-webcam";

import  CameraAltIcon  from '@material-ui/icons/CameraAlt'
import  EditIcon  from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';

export default class Student extends React.Component {
    constructor (props){
        super(props)
       
        
    }

   
    state={
        RollNumber:'112',
        FirstName:'',
        Image:require('../common/images/student._logo.png'),
        dialogOpen:false
        
    }

    form={
        Image:{
            label   : 'Profile',
            error    : false,
            type    : 'file',
            value   :'',
            change  :e =>   {
              
                this.setState({Image:URL.createObjectURL(e.target.files[0])})
            }    
        },
        RollNumber:{

            label   : 'Roll Number',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.RollNumber.error=e.target.value?false:true;
                this.setState({RollNumber:e.target.value})

                }
        },
        FirstName:{
             
            label   : 'First Name',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.FirstName.error=e.target.value?false:true;
                this.setState({FirstName:e.target.value})

                }
        },
        LastName: {
               
            label   : 'Last Name',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.LastName.error=e.target.value?false:true;
                this.setState({LastName:e.target.value})

            }
        },
        Gender: {
   
            label   : 'Gender',
            error   :  false,
            type    :  "text",
            value   :'',
            options :[{label:'Male',value:'M'},{label:'Female',value:'F'},{label:'Other',value:'O'}],
            change  :  e => { 
               
                this.form.Gender.error=e.target.value?false:true;
                this.setState({Gender:e.target.value})

            }
        },
        DOB:{
               
            label   : 'Date of Birth',
            error   :  false,
            type    :  "date",
            value   :'',
           
            change  :  e => { 
               
                this.form.DOB.error=e.target.value?false:true;
                this.setState({DOB:e.target.value})
            }
            
        },
        ClassName:{
   
            label   : 'Class',
            error   :  false,
            type    :  "text",
            value   :'',
            options :[{'label':'10A','value':'10A'},{'label':'10A','value':'10A'}],
            change  :  e => { 
               
                this.form.ClassName.error=e.target.value?false:true;
                this.setState({ClassName:e.target.value})
            }
        },
        FatherName:{
   
            label   : 'Father Name',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.FatherName.error=e.target.value?false:true;
                this.setState({FatherName:e.target.value})
            }
        },
        MotherName:{
   
            label   : 'Mother Name',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.MotherName.error=e.target.value?false:true;
                this.setState({MotherName:e.target.value})
            }
        },
        BloodGroup:{
   
            label   : 'Blood Group',
            error   :  false,
            type    :  "select",
            options :[
                {value:'A+',label:'A Positive'},
                {value:'A-',label:'A Negitive'},
                {value:'B+',label:'B Positive'},
                {value:'B-',label:'B Negitive'},
                {value:'AB+',label:'AB Positive'},
                {value:'AB-',label:'AB Negitive'},
                {value:'O+',label:'O Positive'},
                {value:'O-',label:'O Negitive'}
            ],
            value   :'',
            change  :  e => { 
               
                this.form.BloodGroup.error=e.target.value?false:true;
                this.setState({BloodGroup:e.target.value})
            }
        } ,
        Address:{

            label   : 'Address ',
            error   :  false,
            type    :  "text",
            value   :'',
            change  :  e => { 
               
                this.form.Address.error=e.target.value?false:true;
                this.setState({Address:e.target.value})
            }
        }
       
    }

   dialogClose=()=>{
       this.setState({dialogOpen:false})
   }
   openDialog=()=>{
       console.log('open');
       
       this.setState({dialogOpen:true})
   }

   setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };
  dialogImages=[];

  appendImagesToDialog= ()   => {
      let d={src:this.webcam.getScreenshot(),selected:true}
      this.dialogImages=this.dialogImages.map(img=> {return {'src':img.src,'selected':false}} )
      this.dialogImages.unshift(d)
      console.log(this.dialogImages); 
      this.setState({})
  }


  keyDown=  e => {
    let j;
      if(e.keyCode===40){
    
    this.dialogImages.filter((i,d)=>{
            if(i.selected){
                j=d;
            }
        });
    this.dialogImages=this.dialogImages.map((data,i) =>{ 
         return i==j+1? {src:data.src,selected:true}:i==this.dialogImages.length?{src:data.src,selected:true}:{src:data.src,selected:false} })

          this.setState({})

      }else if (e.keyCode===38){
        this.dialogImages.filter((i,d)=>{
            if(i.selected){
                j=d;
            }
        });
        this.dialogImages=this.dialogImages.map((data,i) =>{ 
            return i==j-1? {src:data.src,selected:true}:i==0?{src:data.src,selected:true}:{src:data.src,selected:false} })
   
             this.setState({})

      }
      console.log(e.keyCode,'0000000000000000');
      
  }


    render(){
       
        const videoConstraints = {
            width: 640,
            height: 720,
            facingMode: "user" 
          };

          
        
        return (
            <div>
                <Dialog 
                 open={this.state.dialogOpen} 
                 onKeyUp={this.keyDown} 
                 aria-labelledby="simple-dialog-title" 
                    fullScreen
                onClose={this.dialogClose}>
                
               
                <DialogTitle id="simple-dialog-title" >Take a Picture</DialogTitle>
               <Divider></Divider>
               
               <DialogContent>
                <Row  >

                <Col lg={2}  >
                <div style={{maxHeight:'100%',overflow:'auto'}} >
                {this.dialogImages.map(image=>{
                    return (<picture> <img src={image['src']} width='100%' style={image.selected?{border:'2px solid blue'}:{}} alt='image' /></picture>)
                })}
                </div>
                </Col>
                <Col lg={9} >
                <Webcam 
                imageSmoothing={true}
                audio={false}  
                
                ref={this.setRef}
                screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
                
               
                </Col>
                </Row>
                </DialogContent>
               <DialogActions >
               <IconButton onClick={this.appendImagesToDialog} ><CameraAltIcon /></IconButton>
               </DialogActions>
                </Dialog>

                <Row>
                    <Col xl={2} lg={2} sm={10} md={10}>
                  <Card className="card"> <IconButton onClick={this.openDialog} className="camera" ><CameraAltIcon  /></IconButton></Card>
                    <div className="Imageuplaod">
                    <input type="file"  onChange={this.form.Image.change}  />
                    <img src={this.state.Image} className="profile" alt="Profile" width="100%" accept=".png, .jpg , .jpeg" />
                    
                    </div>
                    </Col>
                    <Col xl={9} lg={9} sm={10} md={10}>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['RollNumber'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined" type="text" label={this.form['RollNumber'].label}
                          value={this.state['RollNumber']} 
                          error={this.form['RollNumber'].error} 
                          fullWidth onChange={this.form['RollNumber'].change} /> 
                            {this.form['RollNumber'].error && <small style={{'color':'red'}}>Required*</small>}
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                        <Col lg={2} xl={2} md={10} sm={10} xs={10}>
                        <label>Name</label></Col>
                        <Col lg={3} xl={10} md={4} sm={4} xs={4}>
                        <TextField variant="outlined" type="text" label={this.form['FirstName'].label}
                          value={this.state['FirstName']} 
                          error={this.form['FirstName'].error} 
                          fullWidth onChange={this.form['FirstName'].change} /> 
                        </Col>
                        <Col lg={3} xl={10} md={4} sm={4} xs={4}>
                        <TextField variant="outlined" type="text" label={this.form['LastName'].label}
                          value={this.state['LastName']} 
                          error={this.form['LastName'].error} 
                          fullWidth onChange={this.form['LastName'].change} /> 
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['Gender'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined" type="date" label={this.form['Gender'].label}
                         select
                          InputLabelProps={{shrink:true}}
                          value={this.state['Gender']} 
                          error={this.form['Gender'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['Gender'].change} >
                          {this.form.Gender.options.map(option=>{
                             return ( <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
                          )})}
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['DOB'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined" type="date" label={this.form['DOB'].label}
                          InputLabelProps={{shrink:true}}
                          value={this.state['DOB']} 
                          error={this.form['DOB'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['RollNumber'].change} ></TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['ClassName'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined"  label={this.form['ClassName'].label}
                            select
                          InputLabelProps={{shrink:true}}
                          value={this.state['ClassName']} 
                          error={this.form['ClassName'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['ClassName'].change} 
                          >
                            { this.form['ClassName']['options'].map(option=>{
                                return (<MenuItem  key={option.label} value={option.value}>{option.label}</MenuItem>
                            )})}
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['FatherName'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined"  label={this.form['FatherName'].label}
                          
                         
                          value={this.state['FatherName']} 
                          error={this.form['FatherName'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['FatherName'].change} 
                          >
                          
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['MotherName'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined"  label={this.form['MotherName'].label}
                          
                         
                          value={this.state['MotherName']} 
                          error={this.form['MotherName'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['MotherName'].change} 
                          >
                          
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['BloodGroup'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined"  label={this.form['BloodGroup'].label}
                          
                         select
                         InputLabelProps={{shrink:true}}
                          value={this.state['BloodGroup']} 
                          error={this.form['BloodGroup'].error} 
                          helperText="The Field is Requird*"
                          onChange={this.form['BloodGroup'].change} 
                          >
                          {this.form.BloodGroup.options.map(option=>{
                              return (
                                  <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
                              )
                          })}
                          
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                    <Row>
                         <Col lg={2} xl={2} md={10} sm={10}  >{this.form['Address'].label}</Col>
                        
                         <Col lg={5} xl={5} md={10} sm={10}>

                         <TextField variant="outlined"  label={this.form['Address'].label}
                          
                         multiline
                         rows={8}
                         fullWidth
                         
                          value={this.state['Address']} 
                          error={this.form['Address'].error} 
                          helperText="  The Field is Requird*"
                          onChange={this.form['Address'].change} 
                          >
                         
                          
                          </TextField> 
                         
                         </Col>
    
                    </Row>
                    <br></br>
                                        
                    
                    </Col>
                </Row>
                               

            </div>
        )
    }
}
