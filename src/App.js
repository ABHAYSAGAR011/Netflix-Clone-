import React, { useEffect } from 'react';

import './App.css';
import Home from "./screens/HomeScreen"
import LoginScreen  from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router ,Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import{login,logout, selectUser} from "./features/counter/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect (()=>{
       const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          //loggedIn
          dispatch(
            login({
              uid:userAuth.uid,
              email:userAuth.email
            })
          )
            
        }else{
          dispatch(logout())
        }
       })
      return unsubscribe;
  },[dispatch])
   
  return (
    <div className="app">
     
     <Router>
      {!user ? (<LoginScreen  />): (
      
        <Switch>
        <Route exact path ="/profile" >
          <ProfileScreen/>
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
        
        
        
      )}
      </Router>
      </div>
    
  );
}

export default App;
