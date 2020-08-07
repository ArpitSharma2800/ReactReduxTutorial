import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Redux/itemstore'
import Container from './components/container'
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
