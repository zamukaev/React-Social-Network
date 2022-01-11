import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
	{ id: 1, name: "Andrey" },
	{ id: 2, name: "Dimych" },
	{ id: 3, name: "Sveta", },
	{ id: 4, name: "Sasha" },
	{ id: 5, name: "Viktor" },
	{ id: 6, name: "Valera" }
];
const messageItem = [
	{ id: 1, message: "Hi" },
	{ id: 2, message: "How are you" },
	{ id: 3, message: "Yo" },
	{ id: 4, message: "Yo" },
	{ id: 5, message: "Yo" },
];
const postsItem = [
	{ id: 1, post: "hi, how are you?", likesCount: 12 },
	{ id: 2, post: "It's my first post", likesCount: 10 },
];

ReactDOM.render(
	<App dialogsData={dialogsData} messageItem={messageItem} postsItem={postsItem} />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
