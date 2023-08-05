// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div>
        <Main/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
