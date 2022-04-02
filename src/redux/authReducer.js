import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captcha: null

}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case SET_CAPTCHA_URL:
			return {
				...state,
				...action.data
			}
		default: return state
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const setCaptchaUrl = (captcha) => ({ type: SET_USER_DATA, data: { captcha } });

//###############Thunk#######################
export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setAuthUserData(id, email, login, true));
	}

};
export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityAPI.getCaptcha();
	dispatch(setCaptchaUrl(response.data.url))
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		let message = response.data.messages.length > 0 ? response.data.messages : 'some error';
		dispatch(stopSubmit('Login', { _error: message }));
	}
};
export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	dispatch(setAuthUserData(null, null, null, false));
};
export default authReducer; 