import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = ({ posts, addPostHandler, updatePostHandler, newPostText }) => {

	const buttonHandler = (event) => {
		event.preventDefault();
		addPostHandler();
	};
	const onChangeHandler = (event) => {
		let value = event.target.value
		updatePostHandler(value);
	}
	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<form onSubmit={buttonHandler} >
				<textarea onChange={onChangeHandler} value={newPostText} ></textarea>
				<div>	<input type="submit" value="add post" /></div>
			</form  >
			<div className={styles.posts}>
				{posts.map((item, index) => <Post key={index.toString()} post={item.post} likesCount={item.likesCount} />)}
			</div>

		</div >
	)
}

export default MyPosts;