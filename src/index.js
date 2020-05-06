import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = (
  <div>
    <h1>Hello Dojo!</h1>
    <h3>Things I need to do</h3>
    <ul>
      <li>Learn Java Scrip</li>
      <li>Learn Python</li>
      <li>Learn C# </li>
      <li>Graduate</li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
