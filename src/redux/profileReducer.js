import { usersAPI, profileAPI } from '../api/api'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
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
		default: return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
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

export default profileReducer;