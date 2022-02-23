import { usersAPI } from '../api/api'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
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
	profile: null
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				post: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost]
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.text
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		default: return state;
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
};
export const updateNewPostTextActionCreator = (value) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		text: value
	}
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

//###############Thunk#######################
export const setUsersProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId)
			.then(data => {
				dispatch(setUserProfile(data))
			})
	}
}

export default profileReducer;