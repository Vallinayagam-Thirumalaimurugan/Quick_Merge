import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './container/MainApp/MainApp';

ZOHODESK.extension.onload().then((App) => {
  ReactDOM.render(<MainApp />, document.getElementById('main'));
});
