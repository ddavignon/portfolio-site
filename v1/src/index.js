import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';

const config = {
    apiKey: "AIzaSyC-LE3EncNbRth4jNIYWqRQI7nGibxgWsU",
    authDomain: "portfolio-gh-pages.firebaseapp.com",
    databaseURL: "https://portfolio-gh-pages.firebaseio.com",
    projectId: "portfolio-gh-pages",
    storageBucket: "portfolio-gh-pages.appspot.com",
    messagingSenderId: "50509608262"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));