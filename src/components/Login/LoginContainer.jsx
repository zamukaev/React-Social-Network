import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';

import { LoginReduxForm } from './LoginForm';
import { login } from '../../redux/authReducer'


const LoginContainer = ({ login, isAuth, captcha }) => {
	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};

	if (isAuth) {
		return <Navigate to="/profile" />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
		</div>
	)
};
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captcha: state.auth.captcha
	}
};
export default compose(
	connect(mapStateToProps, { login })
)(LoginContainer);


