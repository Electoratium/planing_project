import React, {Component} from 'react';
import SignUpForm from '../../containers/pages/SignUpForm'
class SignUp extends Component {
	state = {

	};
	customFunc = (event) => {

	};
	render() {
		return (
			<div>
				<h1 className = "text-center">Sign up</h1>
				<SignUpForm />
			</div>
		);
	}
}

export default SignUp;
