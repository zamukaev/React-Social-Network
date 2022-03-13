import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserData, logout } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData()
	}
	render() {
		return (<Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout} />)
	}

}
const mapStateToProps = (state) => {

	return {
		userId: state.auth.userId,
		login: state.auth.login,
		email: state.auth.email,
		isAuth: state.auth.isAuth,

	}
}
export default compose(
	connect(mapStateToProps, { getAuthUserData, logout })
)(HeaderContainer);

