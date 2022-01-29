import { connect } from "react-redux";
import { toggleFollowAC, setUsers } from "../../redux/usersReducer";
import Users from "./Users";
const mapStateToProps = (state) => {

	return {
		users: state.usersPage.users
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		toggleFollow: (userId) => {
			dispatch(toggleFollowAC(userId));
		},

		setUsers: (users) => {
			dispatch(setUsers(users));
		}

	}

}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);