import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch} from 'react-router';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Login from './components/login'
import Dashoard from './components/dashborad'
import authcheck from './helpers/auth';
import Student from './components/Student';
import Teacher from './components/Teacher';

const Routes =[
  {
    path:'/login',
    component:Login,

  },
  {
    path:'/dashboard',
    component:Dashoard,

  },
  {
    path:'/addStudent',
    component:Student,

  },
  {
    path:'/updateStudent/:id',
    component:Student,

  },
  {
    path:'/addteacher',
    component:Teacher,

  },
  {
    path:'/updateteacher/:id',
    component:Teacher,

  }
]

class App extends Component {

  
  render() {
    return (
      
      <BrowserRouter >   
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/contact' component={Dashoard} onEnter={authcheck}></Route>
        <Route path='/s' component={Student}></Route>
        <Route path='/t' component={Teacher}></Route>
        <Route path='*' ><Redirect  to="/login" /></Route>
      </Switch>  
       
   </BrowserRouter>
    );
  }
}

export default App;
