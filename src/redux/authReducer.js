import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default: return state
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
//###############Thunk#######################
export const getAuthUserData = () => {
	return (dispatch) => {
		authAPI.me()
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
					dispatch(setAuthUserData(id, email, login, true));
				}
			})
	}
};
export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData());
			}
		})
};

export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(response => {
			dispatch(setAuthUserData(null, null, null, false));
		})
}
export default authReducer;