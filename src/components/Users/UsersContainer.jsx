import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { follow, unFollow, toggleIsFollowingProgress, getUsers } from "../../redux/usersReducer";
import withAuthRedirect from "../hoc/withAuthRedirect";

import Users from "./Users";

class UserComponent extends React.Component {
	componentDidMount() {
		const { pages, count } = this.props;
		this.props.getUsers(pages, count);
	}

	onClickHandler = (pageNumber) => {
		const { count } = this.props;
		this.props.getUsers(pageNumber, count)
	}

	render() {
		return (<Users
			follow={this.props.follow}
			unFollow={this.props.unFollow}
			onClickHandler={this.onClickHandler}
			totalCount={this.props.totalCount}
			count={this.props.count}
			pages={this.props.pages}
			users={this.props.users}
			portionSize={this.props.portionSize}
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
		portionSize: state.usersPage.portionSize,
		totalCount: state.usersPage.totalCount,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
};
export default compose(
	connect(mapStateToProps, { follow, unFollow, toggleIsFollowingProgress, getUsers }),
	withAuthRedirect
)(UserComponent);