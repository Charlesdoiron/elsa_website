import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/components/Root';
import configureStore from './js/configureStore';
import './App.css';

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
