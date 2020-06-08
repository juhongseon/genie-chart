import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./store/store";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
