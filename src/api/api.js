import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '4cefa54c-4627-49e0-b99f-8eb154d97cbb'
	}
});

export const usersAPI = {
	getUsers: (pages, count) => {
		return instance.get(`users?page=${pages}&count=${count}`).then(response => response.data);
	},

	follow: (id) => {
		return instance.post(`follow/${id}`)
	},
	unFollow: (id) => {
		return instance.delete(`follow/${id}`)
	},
	getUserProfile: (id) => {
		return instance.get(`profile/${id}`).then(response => response.data);
	},
	authMe: () => {
		return instance.get('auth/me').then(response => response.data);
	}
}
