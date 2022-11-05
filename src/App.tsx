import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Page from './Page';
import {IntlProvider} from 'react-intl';
import enMessage from './lang/en.json'
import koMessage from './lang/ko.json'

type messege = {
  [key: string]: string
}
const locale: any = localStorage.getItem("locale") ?? "ko";
//const messages:messege = { "en": enMessage, "ko": koMessage }[locale];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Page />
      </header>
      
    </div>
  );
}

export default App;
