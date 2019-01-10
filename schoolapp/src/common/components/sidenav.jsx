import React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../scss/dashboard.scss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import { MenuItem, Paper } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


export default class SideNav extends React.Component {
    constructor(props) {
        super(props)
        
    }


    state={
        open:false,
        mobile:false,
        content:true,
        anchorEl:null,
        expanded:'',
        menu:[]
    }
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
  
    handleClick = submenu => (event,av)=>{
      console.log(submenu,event);
      
      this.setState({menu:submenu});
      this.setState({ anchorEl: event.currentTarget });
    };
    componentWillReceiveProps(){
      this.setState({content:this.props.open})
      this.setState({mobile:!this.state.mobile})
    }
   
   menuexpand=panel=>(event,expand)=>{
     this.setState({expanded:expand?panel:undefined})
   }

   click=()=>{
     this.setState({content:!this.state.content})
   }
   toggleDrawer=(state)=>(event,s)=>{
     this.setState({mobile:state})
   }
   sidemenu_details=[
     {
       name:"DashBoard",
       image:require("../images/home.png"),
       submenu:[
         {
          name:"DashBoard",
          to:"/dashboard"
         }
         
       ],
       role:"All"
     },
     {
      name:"Settings",
      image:require("../images/settings.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Student",
      image:require("../images/student.png"),
      submenu:[
        {
         name:"Add Student",
         to:"/add"
        },
        {
          name:"Attendece",
          to:"/add"
         }
        
      ],
      role:"All"
    },
    {
      name:"Teacher",
      image:require("../images/employee.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Acadmics",
      image:require("../images/settings.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Finance",
      image:require("../images/finance.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Library",
      image:require("../images/home.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Transport",
      image:require("../images/home.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    },
    {
      name:"Reports",
      image:require("../images/home.png"),
      submenu:[
        {
         name:"DashBoard",
         to:"/dashboard"
        }
        
      ],
      role:"All"
    }
   ]
        render() {
          let content;
          const open=Boolean(this.state.anchorEl)
          if(this.state.content){
          content=(<div style={{'paddingBottom':'3cm'}}>
             <img height="30%" width="245px" src={require('../images/title.jpg')} />
             {this.sidemenu_details.map(menu=>{
                 return (
                  <ExpansionPanel expanded={this.state.expanded===menu.name} onChange={this.menuexpand(menu.name)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      
                  <ListItem disablepadding="true" >
                    <ListItemIcon disablepadding="true">
                      <img height="20px" src={menu.image} />
                    </ListItemIcon>
                    <ListItemText inset primary={menu.name} />
                    </ListItem>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                  <List component="div">
                  {menu.submenu.map(list=>{
                    return (<ListItem button >
                    <ListItemText  inset primary={list.name}/>
                    </ListItem>);})}
                </List>
                </ExpansionPanelDetails>
             
                  </ExpansionPanel>

                 )
               })
             } 
           
        </div>
        );
          }else{
           content=<div>
           {this.sidemenu_details.map(menu=>{
             return (<Paper elevation={2}>
             <img height="25px" style={{'padding':'20px'}} src={menu.image} onClick={this.handleClick(menu.submenu)}/>
             
            
             </Paper>
    
             )
           })}
           
           <Menu
                 anchorEl={this.state.anchorEl}
                 open={Boolean(this.state.anchorEl)}
                 onClose={this.handleClose}
                 className="menu" 
                 square="true"
                 style={{'marginLeft':'1.7cm'}}
                 >
                {this.state['menu'].map(list=>{
                  return (
                    <MenuItem onClick={this.handleClose} >{list.name}</MenuItem>
                  )
                })}
                   
          </Menu>
         
         </div>;

          }
          
            
            return (
              <div>
               <Paper style={{'position':'fixed','height':'100%'}} className="sidebar">
                 <Hidden only={['sm','xs']} >
                
                              
                 {content}

                 <IconButton style={{'marginLeft':'2cm','marginRight':'-10px','position':'fixed'}} className={"sidenav_collapse"} onClick={this.click}><MenuIcon  /></IconButton>
              
                 </Hidden>   
                 </Paper>

         

                 <Hidden only={['lg','md','xl']}>

                 <Drawer variant="temporary" open={this.state.mobile} onClose={this.toggleDrawer(false)}>
                 
                 <div style={{'paddingBottom':'3cm'}}>
             <img height="30%" width="300px" src={require('../images/title.jpg')} />
             {this.sidemenu_details.map(menu=>{
                 return (
                  <ExpansionPanel expanded={this.state.expanded===menu.name} onChange={this.menuexpand(menu.name)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      
                  <ListItem disablepadding="true" >
                    <ListItemIcon>
                      <img height="20px" src={menu.image} />
                    </ListItemIcon>
                    <ListItemText inset primary={menu.name} />
                    </ListItem>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                  <List component="div">
                  {menu.submenu.map(list=>{
                    return (<ListItem button >
                    <ListItemText  inset primary={list.name}/>
                    </ListItem>);})}
                </List>
                </ExpansionPanelDetails>
             
                  </ExpansionPanel>
                 )})
             } 
        </div>
                
                </Drawer>
                </Hidden>


     
              </div>
            )
        }
    


}
