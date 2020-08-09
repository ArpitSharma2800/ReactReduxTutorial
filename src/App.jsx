import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';
import Container from './components/container';
import Container2 from './components/reactHooksContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Container /> */}
        <Container2 />
      </div>
    </Provider>
  );
}

export default App;
