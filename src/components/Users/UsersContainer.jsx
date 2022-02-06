import { connect } from "react-redux";
import { toggleFollowAC, setUsers, setPagesAC, setTotalCountAC } from "../../redux/usersReducer";
import Users from "./Users";
const mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pages: state.usersPage.pages,
		count: state.usersPage.count,
		totalCount: state.usersPage.totalCount
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		toggleFollow: (userId) => {
			dispatch(toggleFollowAC(userId));
		},

		setUsers: (users) => {
			dispatch(setUsers(users));
		},
		setPages: (pageNumber) => {
			dispatch(setPagesAC(pageNumber));
		},
		setTotalCount: (totalCount) => {
			dispatch(setTotalCountAC(totalCount));
		}

	}

}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);