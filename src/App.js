import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { create } from 'react-test-renderer';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyCj0ZwEKePtWgQLdCHSR-0uIaCogIlNXZQ",
        authDomain: "manager-c5aa4.firebaseapp.com",
        databaseURL: "https://manager-c5aa4.firebaseio.com",
        projectId: "manager-c5aa4",
        storageBucket: "manager-c5aa4.appspot.com",
        messagingSenderId: "685056936129",
        appId: "1:685056936129:web:801790e857ca6eb97dec40",
        measurementId: "G-R7FBDH7XQR"
      });
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;