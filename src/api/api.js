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
		return instance.get(`users?page=${pages}&count=${count}`);
	},

	follow: (id) => {
		return instance.post(`follow/${id}`)
	},
	unFollow: (id) => {
		return instance.delete(`follow/${id}`)
	}
};


export const profileAPI = {
	getUserProfile: (id) => {
		return instance.get(`profile/${id}`).then(response => response.data);
	},
	getStatus: (id) => {
		return instance.get(`/profile/status/${id}`)
	},
	updateStatus: (status) => {
		return instance.put(`profile/status`, { status })
	}

};

export const authAPI = {
	me: () => {
		return instance.get('auth/me');
	},
	login: (email, password, rememberMe) => {
		return instance.post('/auth/login', { email, password, rememberMe });
	},
	logout: () => {
		return instance.delete('/auth/login');
	}

};
