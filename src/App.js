import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navabar from './components/Navabar';
import News from './components/News';

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navabar/>
          <Switch>

          
          <Route exact path="/">
            <News key = "general" pageSize ={9} country="in" category="general" />
          </Route>
          
          <Route exact path="/Home">
            <News key = "general" pageSize ={9} country="in" category="general" />
          </Route>

          <Route exact path="/business">
            <News key = "business" pageSize ={9} country="in" category="business" />
          </Route>

          <Route exact path="/entertainment">
            <News key = "entertainment" pageSize ={9} country="in" category="entertainment" />
          </Route>

          <Route exact path="/health">
            <News key = "health" pageSize ={9} country="in" category="health" />
          </Route>

          <Route exact path="/science">
            <News key = "science" pageSize ={9} country="in" category="science" />
          </Route>

          <Route exact path="/technology">
            <News key = "technology" pageSize ={9} country="in" category="technology" />
          </Route>

          <Route exact path="/sport">
            <News key = "sport" pageSize ={9} country="in" category="sport" />
          </Route>

        </Switch>

        </Router>
      </div>
    )
  }
}

