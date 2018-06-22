import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Landing from './landing.js';
import Header from './header.js';
import Dashboard from './dashboard.js';


class App extends React.Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	
	render(){
	return(
	<div className = "container">
		<Header />
		<div>
		<Switch>
		<Route path ='/surveys' component = {Dashboard} />
		<Route exact path ='/' component = {Landing} />
		</Switch>
		</div>
		</div>
	)
}}

export default connect(null,actions)(App);