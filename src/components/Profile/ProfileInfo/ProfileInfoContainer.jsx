import React from "react";
import ProfileInfo from './ProfileInfo';
import { setUsersProfile } from "../../../redux/profileReducer";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

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
			userId = 2;
		}
		this.props.setUsersProfile(userId)
	}
	render() {
		return (
			<ProfileInfo profile={this.props.profile} />
		);
	}
}
const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}
const withUrlDataContainerComponent = withRouter(ProfileInfoContainer);
export default connect(mapStateToProps, { setUsersProfile })(withUrlDataContainerComponent)

