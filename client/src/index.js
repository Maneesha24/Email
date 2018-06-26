import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/app.js';
import reduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';

const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store = {store}>
			<BrowserRouter><App />
				</BrowserRouter>
				</Provider>,document.getElementById('root'));
				
				
