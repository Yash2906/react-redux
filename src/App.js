import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';

import Post from './components/posts';
import PostForms from './components/postform';
import store from './store';

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForms />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
