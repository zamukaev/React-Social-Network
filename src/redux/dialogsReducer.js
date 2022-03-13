const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
	messages: [
		{
			id: 1,
			message: "Hi",
			img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
		},
		{
			id: 2,
			message: "How are you",
			img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
		},
		{
			id: 3,
			message: "I am fine",
			img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
		},
		{
			id: 4,
			message: "Yo",
			img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
		},
		{
			id: 5,
			message: "Yo",
			img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
		},
	],
	messages2: [
		{
			id: 1,
			message: "Hi",
			img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
		},
		{
			id: 2,
			message: "I am fine, thank you",
			img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
		},
		{
			id: 3,
			message: "and you",
			img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
		},
		{
			id: 4,
			message: "Yo",
			img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
		},
		{
			id: 5,
			message: "Yo",
			img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
		},
	],
	dialogsItem: [
		{
			id: 1,
			name: "Andrey"
		},
		{
			id: 2,
			name: "Dimych"
		},
		{
			id: 3,
			name: "Sveta",
		},
		{
			id: 4,
			name: "Sasha"
		},
		{
			id: 5,
			name: "Viktor"
		},
		{
			id: 6,
			name: "Valera"
		}
	]

};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.text
			};

		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: 1,
				message: action.newMessageText,
				img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
			};
			return {
				...state,
				messages: [...state.messages, newMessage]
			}

		default: return state;
	}

}
export const sendMessageCreator = (newMessageText) => {
	return {
		type: SEND_NEW_MESSAGE,
		newMessageText
	}
};
export const updateNewMessageTextCreator = (value) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT, text: value
	}
};

export default dialogsReducer;