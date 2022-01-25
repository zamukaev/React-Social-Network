import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



export let store = {
	_subscriber() {
		console.log('no subscriber');
	},
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
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
			newMessageText: '',
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

		},
		sidebar: {
			friends: [
				{
					id: "s123",
					name: "Alexandr",
					img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-256.png"
				},
				{
					id: "s324",
					name: "Migel",
					img: "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-256.png"
				},
				{
					id: "s394",
					name: "Mikal",
					img: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/12-Delivery_Man-256.png"
				}

			]
		}

	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._subscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarReducer = sidebarReducer(this._state.sidebar, action)
		this._subscriber(this._state);
	}
};




