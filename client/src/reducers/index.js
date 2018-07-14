import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer.js';
import authReducer from './authReducers';

export default combineReducers({
	auth: authReducer,
	form : reduxForm,
	surveys : surveysReducer
});
