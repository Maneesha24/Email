import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields.js';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';


const SurveyFormReview = ({onCancel, formValues,submitSurvey,history}) =>{
	const reviewFields = _.map(FIELDS,({name,label}) => {
		return(
		<div key = {name} style = {{marginBottom : '20px'}}>
			<label>{label}</label>
			<div>
			{formValues[name]}
			</div>
			</div>
		);
	});
	
	return(
	<div>
		<h5>Please confirm your entries!</h5>
		{reviewFields}
		<button onClick = {()=> submitSurvey(formValues,history)} className = "green btn-flat right white-text">Send Survey<i className = "material-icons right">email</i></button>
		<button className = 'yellow darken-3 white-text btn-flat' onClick = {onCancel}>Back</button>
		</div>
	);
};

function mapStateToProps(state){
	return { formValues: state.form.surveyForm.values };
	}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));