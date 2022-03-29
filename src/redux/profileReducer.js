import { profileAPI, } from '../api/api'
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
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
	status: ''
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
		default: return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoCreator = (photos) => ({ type: SAVE_PHOTO, photos })
//###############Thunk#######################
export const getUsersProfile = (userId) => async (dispatch) => {
	const response = await profileAPI.getUserProfile(userId)
	dispatch(setUserProfile(response))
}
export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
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
		dispatch(getUsersProfile(userId))
	}
}

export default profileReducer;