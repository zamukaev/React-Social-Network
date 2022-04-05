import { profileAPI, } from '../api/api'
import { stopSubmit } from 'redux-form';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_ERROR = 'SET_ERROR';
const initialState = {
	posts: [
		{
			id: 1,
			post: "hi, how are you?",
			likesCount: 12
		},
		{
			id: 2,
			post: "It's my first post",
			likesCount: 10
		},
	],
	newPostText: '',
	profile: null,
	status: '',
	updateProfileStatus: true,
	error: null
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				post: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status
			};
		case SAVE_PHOTO:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			};
		case UPDATE_PROFILE_STATUS:
			return {
				...state,
				updateProfileStatus: action.updateProfileStatus
			};
		case SET_ERROR:
			return {
				...state,
				error: action.error
			};
		default: return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoCreator = (photos) => ({ type: SAVE_PHOTO, photos });
export const updateProfileStatusAC = (updateProfileStatus) => ({ type: UPDATE_PROFILE_STATUS, updateProfileStatus });
export const setError = (error) => ({ type: SET_ERROR, error });
//###############Thunk#######################
export const getUsersProfile = (userId) => async (dispatch) => {
	const response = await profileAPI.getUserProfile(userId);
	dispatch(setUserProfile(response));
}
export const getStatus = (userId) => async (dispatch) => {
	try {
		const response = await profileAPI.getStatus(userId);
		dispatch(setStatus(response.data));
	} catch (error) {
		dispatch(setError(error.message));
		setTimeout(() => {
			dispatch(setError(null))
		}, 2000);
	}

};
export const updateStatus = (status) => async (dispatch) => {
	try {
		const response = await profileAPI.updateStatus(status);
		dispatch(setStatus(status));
	}
	catch (error) {
		dispatch(setError(error.message));
		setTimeout(() => {
			dispatch(setError(null))
		}, 2000);
	}




};
export const savePhotoThunk = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file);
	if (response.data.resultCode == 0) {
		dispatch(savePhotoCreator(response.data.data.photos))
	};
};
export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.id;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode == 0) {
		dispatch(updateProfileStatusAC(true))
		dispatch(getUsersProfile(userId))

	} else {
		dispatch(updateProfileStatusAC(false))
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
		dispatch(stopSubmit('profile', { _error: message }));
	}
}

export default profileReducer;