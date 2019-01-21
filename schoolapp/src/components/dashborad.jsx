import React from 'react';
import '../common/scss/dashboard.scss'
import NavBar from '../common/components/navbar'
import SideNav from '../common/components/sidenav';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Button, Fab, Hidden, Typography, CardHeader, Divider } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import { Grid,Row,Col,code} from 'react-bootstrap';

import authService from '../common/services/authService';
import Student from  './Student';


class Contact extends React.Component {
   constructor(props){
      super(props)
      authService.login('data').then(data=>{
         console.log('Success');
      }
      ).catch(err=>{
         console.log('errrrr');
         
      })
      
     
   }

   

   state={
      mobile:false,
      expand:false,
      tabs:0
   }

   expand=()=>{
      this.setState({expand:!this.state.expand});
   }

   handleFilterUpdate= (filterValue)=> {
      this.setState({
        mobile: !this.state.mobile
      });
   }

   handleTabs=(event, tabs) => {
      console.log(tabs,this.state.expand);
      this.setState({ tabs:tabs });
    };



   render() {
      let DashBoard;
      DashBoard=(<div>

<div className="row">
<br />
<br />
<Typography variant="headline" >DashBoard</Typography>
<br />

</div>

       <div className="row">
        
       <Card elevation={8} style={{'padding':'20px','margin':'20px 0 0 20px'}} className="text-overflow col-sm-10 col-2 col-md-2 col-lg-2 hover">No of Students:</Card>
       <Card elevation={8} style={{'padding':'20px','margin':'20px 0 0 20px'}} className="text-overflow col-sm-10 col-2 col-md-2 col-lg-2 hover">No of Empoyees:</Card>
       <Card elevation={8} style={{'padding':'20px','margin':'20px 0 0 20px'}} className="text-overflow col-sm-10 col-2 col-md-2 col-lg-2 hover">Total Courses</Card>
       <Card elevation={8} style={{'padding':'20px','margin':'20px 0 0 20px'}} className="text-overflow col-sm-10 col-2 col-md-2 col-lg-2 hover">Else</Card>
       </div>
         <div className="row">
       <Paper className="col-10" style={{'margin':'20px'}} square>
        <Tabs
        value={this.state.tabs}
        onChange={this.handleTabs}
         
        >
          <Tab label="Gardes" ></Tab>
          <Tab label="Attendance" />
          <Tab label="Fee" />
        </Tabs>
       
      </Paper>
      {/* <Paper className="col-2" style={{'margin':'20px'}} square>jrfnrj</Paper> */}

      
      </div>
      <div className="row">
      {this.state.tabs === 0 && <Card className="col-7" style={{'margin':'20px','height':'10cm'}}>Item One</Card>}
      {this.state.tabs === 1 && <Card className="col-7" style={{'margin':'20px','height':'10cm'}}>Item Two</Card>}
      {this.state.tabs === 2 && <Card className="col-7" style={{'margin':'20px','height':'10cm'}}>Item Three</Card>}
      <div className="col-3 col-sm-11 col-lg-3 col-xl-3" style={{'margin':'20px 0 20px 0','height':'2cm'}}>

       <Card  ><div style={{'textAlign':"center",'padding':'15px'}}>News Feed</div>
       <Divider></Divider>
       <CardContent>

          
          </CardContent> 
       </Card>
       <br></br>
       <Card  ><div style={{'textAlign':"center",'padding':'15px'}}>Birthday</div>
       <Divider></Divider>
       <CardContent>
          
          
          </CardContent> 
       </Card>
       </div>
     
      
      </div>
      
      </div>
     

       
      )
     
      return (
         <div>
        <NavBar updateFilter={this.handleFilterUpdate}  />
        <SideNav mobile={this.state.mobile} open={this.state.expand} />
        <div style={{'marginTop':'65px'}}>

        <Hidden only={['sm','xs']} >

        <Fab onClick={this.expand}  size={'small'}
         style={{'marginTop':'2cm','marginLeft':this.state.expand?'1.4cm':'5.99cm','zIndex':'2000 !important','backgroundColor':'#white','position':'fixed'}}
        >
        {this.state.expand?<MenuIcon />:<FirstPageIcon />}
        </Fab>


        </Hidden>


        <Hidden only={['sm','xs']}>
       

        <div style={{'marginLeft':this.state.expand?'2.1cm':'6.7cm'}}>
        <Student />
        
        {DashBoard}
   </div>
       
        </Hidden>

        <Hidden only={['lg','md','xl']}>
        {DashBoard}
        
        </Hidden>
      
        </div>
        </div>
       
      )
   }
}
export default Contact;
