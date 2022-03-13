
import { usersAPI } from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGES = 'SET_PAGES';
const SET_TOTALCOUNT = 'SET_TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const initialState = {
	users: [],
	pages: 1,
	count: 5,
	totalCount: 0,
	isFetching: true,
	followingInProgress: []

}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return { ...u, followed: true };
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return { ...u, followed: false };
					return u;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			}
		case SET_PAGES:
			return {
				...state,
				pages: action.pageNumber
			}
		case SET_TOTALCOUNT:
			return {
				...state,
				totalCount: action.totalCount
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching ?
					[...state.followingInProgress, action.userId]
					:
					state.followingInProgress.filter(id => id != action.userId)
			}
		default: return state;
	}

}
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPagesAC = (pageNumber) => ({ type: SET_PAGES, pageNumber });
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTALCOUNT, totalCount });
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//###############Thunk#######################
export const getUsers = (pages, count) => {
	return (dispatch) => {
		dispatch(setToggleIsFetching(true));
		usersAPI.getUsers(pages, count)
			.then(response => {
				dispatch(setUsers(response.data.items));
				dispatch(setTotalCountAC(response.data.totalCount));
				dispatch(setToggleIsFetching(false));
				dispatch(setPagesAC(pages))
			});
	}
}

export const follow = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, id));
		usersAPI.follow(id)
			.then(response => {
				if (response.data.resultCode == 0) dispatch(followSuccess(id));
				dispatch(toggleIsFollowingProgress(false, id));
			});
	}
}
export const unFollow = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, id));
		usersAPI.unFollow(id)
			.then(response => {
				if (response.data.resultCode == 0) dispatch(unFollowSuccess(id));
				dispatch(toggleIsFollowingProgress(false, id));
			});
	}
}
export default usersReducer;