import React from 'react';
import {Provider} from 'react-redux';
import store from './store'

import './App.css';
import LoginForm from './components/login-form/LoginForm';

function App() {
  return (
    <div className="App">
    <Provider store = {store}>
      <LoginForm />
    </Provider>  
    </div>
  );
}

export default App;
