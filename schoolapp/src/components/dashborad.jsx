import React from 'react';
import '../common/scss/dashboard.scss'
import NavBar from '../common/components/navbar'
import SideNav from '../common/components/sidenav';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Button, Fab, Hidden } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Grid,Row,Col,code} from 'react-bootstrap'


class Contact extends React.Component {
   constructor(props){
      super(props)
      this.classes=props
      this.state = {date: new Date().toLocaleDateString()};
   }

   

   state={
      mobile:false,
      expand:false
   }

   expand=()=>{
      this.setState({expand:!this.state.expand});
   }
   handleFilterUpdate= (filterValue)=> {
      this.setState({
        mobile: !this.state.mobile
      });
   }
   render() {
      let DashBoard;
      DashBoard=(<div>


       
         
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
