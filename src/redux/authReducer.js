import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

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
export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setAuthUserData(id, email, login, true));
	}

};
export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		let message = response.data.messages.length > 0 ? response.data.messages : 'some error';
		dispatch(stopSubmit('Login', { _error: message }));
	}
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	dispatch(setAuthUserData(null, null, null, false));
};
export default authReducer;