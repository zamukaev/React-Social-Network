import React from "react";
import ProfileInfo from './ProfileInfo';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getUsersProfile, getStatus, updateStatus } from "../../../redux/profileReducer";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { compose } from "redux";

const withRouter = (WrappedComponent) => (props) => {
	const params = useParams();
	return (
		<WrappedComponent {...props}
			params={params} />
	)
};

class ProfileInfoContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
		}

		this.props.getUsersProfile(userId)
		this.props.getStatus(userId);
	}
	render() {
		return (
			<ProfileInfo profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus} />
		);
	}
};
const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authUserId: state.auth.id

	}
};
export default compose(
	connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileInfoContainer);





