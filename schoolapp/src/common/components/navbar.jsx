import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';

import Typography from '@material-ui/core/Typography'
import { MenuItem, Paper } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';

 

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.handleClose.bind(this)
    }

    state = {
      anchorEl:null,
      anchorEl1:null,
      sidemenutype:"persistant",
      opensidenav:true
          };


      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleClick1 = event => {
        this.setState({ anchorEl1: event.currentTarget });
      };

      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      handleClose1 = () => {
        this.setState({ anchorEl1: null });
      };

      mobilesidemenu=()=>{
        this.setState({ sidemenutype:"temporary",opensidenav:true})
      }
      

    render(){
      const open = Boolean(this.state.anchorEl);
      const open1 = Boolean(this.state.anchorEl1);
      const boy=require("../images/boy.svg")
      const msg=require("../images/conversation.svg")
      const notification=require("../images/notification.png")

        return (
          <div>
            <AppBar position="fixed" color="inherit"  >
               <Toolbar >

               <Hidden  only={['lg','xl','md']}>
               <IconButton className="lg" onClick={this.props.updateFilter}><MenuIcon /></IconButton></Hidden>
                 <Typography variant="h5" color="inherit" className="custumfonts">
                  MyApp
                 </Typography>
                 {/* <Hidden only={['sm','xs']}>
                <IconButton className="sm"><MenuIcon /></IconButton></Hidden> */}
                <div style={{'color':'gray','marginLeft':'auto'}} className="sm">
                <Grid container wrap="nowrap" spacing={16}  >        
                   {/* <Grid item>
                    <InputBase placeholder="Search.." className={"search"}></InputBase>
                   </Grid> */}


                    <Grid item >
                      <IconButton aria-label="4 pending messages" onClick={this.handleClick}>
                      <Badge badgeContent={1} color="secondary">
                      <img height="20px"  src={msg} />
                      </Badge>
                      </IconButton>
                      
                      <Menu
                          id="fade-menu"
                          anchorEl={this.state.anchorEl}
                          open={open}
                          onClose={this.handleClose}
                          className="menu"
                          style={{'margin':'1cm 2cm 0 0','height':'20cm'}}
                         
                      >
          <MenuItem onClick={this.handleClose}
          >
          <List >
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem></List>
          
          </MenuItem>

          <MenuItem onClick={this.handleClose}>
          <List >
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="My Profile" secondary="Jan 9, 2014" />
          </ListItem></List>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
          <List >
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Logout" />
          </ListItem></List>
          </MenuItem> 


        </Menu>
       
                    </Grid>
                <Grid item >
                      <IconButton aria-label="4 pending messages" onClick={this.handleClick}>
                      <Badge badgeContent={4} color="secondary">
                      <img height="20px"  src={require("../images/notification.png")} />
                      </Badge>
                    </IconButton>
            <Menu
                    id="fade-menu"
                    anchorEl={this.state.anchorEl1}
                    open={open}
                    onClose={this.handleClose}
                    className="menu"
                    style={{'marginTop':'1cm'}}

                  >

          <MenuItem onClick={this.handleClose} 
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          ><List >
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem></List></MenuItem>

          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem> 
        </Menu>
                </Grid>        
                <Grid item>
                   <Avatar onClick={this.handleClick} src={require('../images/boy.svg')}>A</Avatar> 
                </Grid>

                <Grid item>
                  
                {/* <IconButton style={{'marginLeft':'auto','marginRight':'-10px'}} className={"sidenav_collapse"} onClick={this.click}><MenuIcon  /></IconButton> */}
              
               <Typography variant="subheading" style={{'padding':'10px'}}>Abhinav</Typography>
             
              <Menu
                 id="fade-menu1"
                 anchorEl={this.state.anchorEl1}
                 open={open1}
                 onClose={this.handleClose}
                 className="menu"
                 style={{'marginTop':'1cm'}}
                
              >
              <MenuItem  onClick={this.handleClose}>
            menu...
           </MenuItem></Menu>
             

                
                {/* <Typography variant="span" style={{'padding':'12px 30px 12px 0px'}} noWrap>Abhinav</Typography> */}
                </Grid>


              </Grid>
                </div>
                  </Toolbar>
                  </AppBar>
                    
                {/* <SideNav open={this.props.open} mini={this.state.mini} /> */}


               </div>
              )
}}

export default NavBar;
