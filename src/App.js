import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,Routes as
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/userSlice';

function App() {
  const user=useSelector(selectuser);
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }
      else{
          dispatch(logout());
      }
    });
    return unsubscribe;

  },[dispatch]);

  return (
    <div className="app">
     <Router>
       {!user ?(<LoginScreen/>):(
        <Switch>
          <Route path="/profile" element={<ProfileScreen/>}/>
          <Route exact path="/" element={<HomeScreen/>}/>
        </Switch>)}
    </Router>
    </div>
  );
}

export default App;
