import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LoginReduxForm } from './LoginForm';
import { login } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';

const LoginContainer = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};
	if (props.isAuth) {
		return <Navigate to="/profile" />
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}
export default compose(
	connect(mapStateToProps, { login })
)(LoginContainer);


