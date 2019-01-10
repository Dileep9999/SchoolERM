import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch} from 'react-router';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Login from './components/login'
import Dashoard from './components/dashborad'
import authcheck from './helpers/auth'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter >   
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/contact' component={Dashoard} onEnter={authcheck}></Route>
        <Route path='*' ><Redirect from="/" to="/login" /></Route>
      </Switch>  
       
   </BrowserRouter>
    );
  }
}

export default App;
