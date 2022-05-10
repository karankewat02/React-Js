import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navabar from './components/Navabar';
import News from './components/News';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import Footer from './components/Footer'
import Admin from './components/Admin'

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navabar/>
          <Switch>
          
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/register">
            <Register/>
          </Route>
          
          <Route exact path="/admin">
            <Admin/>
          </Route>


          
          <Route exact path="/">
            <Home/>
          </Route>


          
          <Route exact path="/campus">
            <News key = "campus" clg ={true} pageSize ={9} country="in" category="campus" />
          </Route>
          
          <Route exact path="/academics">
            <News key = "academics" clg ={true} pageSize ={9} country="in" category="academics" />
          </Route>
          
          <Route exact path="/placements">
            <News key = "placements" clg ={true} pageSize ={9} country="in" category="placements" />
          </Route>
          
          <Route exact path="/events">
            <News key = "events" clg ={true} pageSize ={9} country="in" category="events" />
          </Route>
          


          <Route exact path="/general">
            <News key = "general" pageSize ={9} country="in" category="general" />
          </Route>

          <Route exact path="/business">
            <News key = "business" pageSize ={9} country="in" category="business" />
          </Route>

          <Route exact path="/science">
            <News key = "science" pageSize ={9} country="in" category="science" />
          </Route>

          <Route exact path="/technology">
            <News key = "technology" pageSize ={9} country="in" category="technology" />
          </Route>

        </Switch>

        <Footer />

        </Router>
      </div>
    )
  }
}

