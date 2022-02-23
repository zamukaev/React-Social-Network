import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import { usersAPI } from "../../api/api";
import { follow, unFollow, toggleIsFollowingProgress, getUsers } from "../../redux/usersReducer";

class UserComponent extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.pages, this.props.count)
	}

	onClickHandler = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.count)
	}

	render() {
		return (<Users
			follow={this.props.follow}
			unFollow={this.props.unFollow}
			onClickHandler={this.onClickHandler}
			totalCount={this.props.totalCount}
			count={this.props.count}
			pages={this.pages}
			users={this.props.users}
			isFetching={this.props.isFetching}
			followingInProgress={this.props.followingInProgress}
			toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
		/>)
	}

}



const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pages: state.usersPage.pages,
		count: state.usersPage.count,
		totalCount: state.usersPage.totalCount,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
};
export default connect(mapStateToProps, {
	follow,
	unFollow,
	toggleIsFollowingProgress,
	getUsers
}
)(UserComponent);