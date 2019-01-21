import React from 'react';
import { Card, Grid, Typography, TextField, Divider, Button, InputAdornment, IconButton } from '@material-ui/core';
import '../common/scss/login.scss';
import authService from '../common/services/authService';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Particles from 'react-particles-js';
import LockIcon from '@material-ui/icons/Lock'


export default class Login extends React.Component{
    constructor(props){
        super(props)
      console.log(navigator.platform,navigator.appName,navigator.appCodeName);
      
    }

    state={
        rembered:false,
        username:'',
        showPassword:false,
        paassword:''
    }

    passwordVisilbility= (e) =>{
        this.setState({showPassword:!this.state.showPassword})
    }

    form={
        username:{
            label   :'Username',
            error   :false,
            value   :'',
            helpertext:'Field is required*',
            change  : e => {
               this.form.username.error=e.target.value?false:true;
               this.form.username.value=e.target.value;
               this.setState({});
            }
        },
        password:{
            label   :'Password',
            error   :false,
            value   :'',
            helpertext:'Field is required*',
            change  : e => {
               this.form.password.error=e.target.value?false:true;
               this.form.password.value=e.target.value;
               this.setState({});
            }
        }
    }

    login=(e)=> {
        e.preventDefault();
        if(this.form.username.value && this.form.password.value ){
            
                authService.login(
                    {
                        username:this.form.username.value,
                         password:this.form.password.value
                    })
                    .then(data=>{
                       localStorage.setItem('token',data['token']);
                       this.context.router.transitionTo('/s')
                        
                    })
                    .catch(err => {
                        
                        console.log(err);

                        
                    })
           
               

            
        }else{
            this.form.password.error=this.form.password.value?false:true;
            this.form.username.error=this.form.username.value?false:true;
            this.setState({});
        }
        
    }


    render(){
       
        return(
           <div>
               <Card className="login">
               <Grid container spacing={4}>
               <Grid item xs lg={7}>
               <div className="display">
               {/* <Particles
               className="particle"
               params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 5
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        onclick:{
                            enable:true,
                            "mode":"grab"
                        }
                    }
                }
    }} /><*/}
             </div> 
               </Grid>
               <Grid item xs={12} lg={4}>

               <Card className="loginInput" elevation={16}>
                
               <Typography variant="title" style={{padding:'20px'}}>Login</Typography>
               <Divider></Divider>
               <br></br>
                <br></br>
               <TextField 
               variant="outlined"
               label="Username"
               type="text"
               fullWidth
               error={this.form.username.error}
               helperText={this.form.username.error?this.form.username.helpertext:''}
               value={this.form.username.value}
               onChange={this.form.username.change}
               InputProps={
                   {
                       startAdornment:<InputAdornment position="start"><AccountCircleIcon /></InputAdornment>
                   }
               }
               placeholder="username"
               ></TextField>

               <br></br>
               <br></br>
               <TextField 
               variant="outlined"
               label="Password"
               fullWidth
               error={this.form.password.error}
               helperText={this.form.password.error?this.form.password.helpertext:''}
               onChange={this.form.password.change}
               type={this.state.showPassword?"text":"password"}
               placeholder="password"
               InputLabelProps={{shrink:true}}
               InputProps={
                   {
                       endAdornment:(<InputAdornment position="end">
                       <IconButton 
                       onClick={this.passwordVisilbility}
                       >
                           {this.state.showPassword?<Visibility /> : <VisibilityOff />}
                       </IconButton>
                       </InputAdornment>),
                       
                   }
               }
               ></TextField>
               <br></br>
               <br></br>
               <Button variant="raised" onClick={this.login} >Login</Button>
               <br></br>
               <br></br>
               <Button variant="text" >ForGot Password</Button>
               <br></br>
               <br></br>
               </Card>
               </Grid>
               </Grid>
               

               </Card>
           </div>
        )
    }
}

