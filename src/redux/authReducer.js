import { usersAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false
}
const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {

				...action.data
			}
		default: return state
	}
};

export const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });
//###############Thunk#######################
export const authUser = () => {
	return (dispatch) => {
		usersAPI.authMe()
			.then(data => {
				if (data.resultCode == 0) {
					let { email, id, login } = data.data
					dispatch(setUserData(id, login, email, true));
				}
			})
	}
}
export default authReducer;