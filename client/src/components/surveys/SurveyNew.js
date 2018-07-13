import React from 'react';
import SurveyForm from './SurveyForm.js';
import SurveyFormReview from './SurveyFormReview.js';

class SurveyNew extends React.Component{
	
	state = {showFormReview : false};

renderContent(){
	if(this.state.showFormReview){
		return <SurveyFormReview />
	}
		return <SurveyForm onSurveySubmit = {() => this.setState({showFormReview :true})}/>
}
	render(){
		return(<div>
			   {this.renderContent()}
			   </div>);
	}
}
			   export default SurveyNew;
			   