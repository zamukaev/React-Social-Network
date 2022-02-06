const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGES = 'SET_PAGES';
const SET_TOTALCOUNT = 'SET_TOTALCOUNT';
const initialState = {
	users: [],
	pages: 1,
	count: 5,
	totalCount: 0
}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return { ...u, followed: !u.followed };
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
		default: return state;
	}

}
export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPagesAC = (pageNumber) => ({ type: SET_PAGES, pageNumber })
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTALCOUNT, totalCount })
export default usersReducer;