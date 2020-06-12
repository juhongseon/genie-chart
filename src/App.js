import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./store/store";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Search from "./components/Search";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/detail/:songid'} component={Detail}/>
          <Route path={'/search'} component={Search}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
