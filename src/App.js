import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoView from "./Components/TodoView"
import TodoCreateView from "./Components/TodoCreateView"

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    //run checkAuthentication
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TodoView} />
          <Route exact path="/create_todo" component={TodoCreateView} />
        </Switch>
      </Router>
    );
  }
}
