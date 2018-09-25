import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './Root'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import todoSaga  from './store/saga/saga'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./store/reducers"

const todoMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(todoMiddleware))//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
todoMiddleware.run(todoSaga)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <div>
          <Provider store={store}>
            <Root />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
