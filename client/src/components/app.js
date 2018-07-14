import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Landing from './landing.js';
import Header from './header.js';
import Dashboard from './dashboard.js';
import SurveyNew from './surveys/SurveyNew.js';


class App extends React.Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	
	render(){
	return(
	    <div className = "container">
		 <BrowserRouter>
		  <div>
		    <Header />
		    <Route exact path ='/' component = {Landing} />
		     <Route exact path ='/surveys' component = {Dashboard} />
		     <Route path = '/surveys/new' component = {SurveyNew} />  
		  </div>
		 </BrowserRouter>
		</div>
	);
}}

export default connect(null,actions)(App);