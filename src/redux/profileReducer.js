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

export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
		newPostText
	}
};
// export const updateNewPostTextActionCreator = (value) => {
// 	return {
// 		type: UPDATE_NEW_POST_TEXT,
// 		text: value
// 	}
// };
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
//###############Thunk#######################
export const getUsersProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getUserProfile(userId)
			.then(data => {
				dispatch(setUserProfile(data))
			})
	}
}
export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data))
			});
	}
};
export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	}
};

export default profileReducer;