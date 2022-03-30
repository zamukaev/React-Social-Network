import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { compose } from "redux";

import { getUsersProfile, getStatus, updateStatus, savePhotoThunk, saveProfile, updateProfileStatusAC } from "../../../redux/profileReducer";
import withAuthRedirect from '../../hoc/withAuthRedirect';

import ProfileInfo from './ProfileInfo';

const withRouter = (WrappedComponent) => (props) => {
	const params = useParams();
	return (
		<WrappedComponent {...props}
			params={params} />
	)
};

class ProfileInfoContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
		}
		this.props.getUsersProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.params.userId !== prevProps.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<ProfileInfo
				isOwner={!this.props.params.userId}
				profile={this.props.profile}
				isAuth={this.props.isAuth}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				savePhotoThunk={this.props.savePhotoThunk}
				saveProfile={this.props.saveProfile}
				updateProfileStatus={this.props.updateProfileStatus}
				updateProfileStatusAC={this.props.updateProfileStatusAC}

			/>
		);
	}
};
const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		updateProfileStatus: state.profilePage.updateProfileStatus,
		status: state.profilePage.status,
		authUserId: state.auth.id

	}
};
export default compose(
	connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhotoThunk, saveProfile, updateProfileStatusAC }),
	withRouter,
	withAuthRedirect
)(ProfileInfoContainer);





