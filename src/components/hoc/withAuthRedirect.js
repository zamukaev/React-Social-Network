import React from "react"
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
};

const withAuthRedirect = (Component) => {
	const RedirectComponent = (props) => {
		if (!props.isAuth) return <Navigate to="/login" />
		return <Component {...props} />
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectedAuthRedirectComponent;
};
export default withAuthRedirect;