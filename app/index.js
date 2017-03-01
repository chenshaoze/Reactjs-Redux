import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
    document.getElementById('root')
);