import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Page from './Page';
import {IntlProvider} from 'react-intl';
import enMessage from './lang/en.json'
import koMessage from './lang/ko.json'
import { func } from 'prop-types';


function App() {
  return (
    <div className="App">
        <Page />
        
    </div>
  );
}

export default App;
