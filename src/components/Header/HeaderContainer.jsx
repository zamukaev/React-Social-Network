import React from 'react';
import { connect } from 'react-redux';
import { authUser } from '../../redux/authReducer';

import Header from './Header';


class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authUser()
	}
	render() {
		return (<Header login={this.props.login} isAuth={this.props.isAuth} />)
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

export default connect(mapStateToProps, { authUser })(HeaderContainer)