import React from 'react';
import { reduxForm } from 'redux-form';
import MyPostForm from '../MyPosts/MyPostForm';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = ({ posts, addPostActionCreator, }) => {
	const MyPostReduxForm = reduxForm({ form: 'newPostText' })(MyPostForm);

	// const buttonHandler = (event) => {
	// 	event.preventDefault();
	// 	addPostActionCreator();

	// };
	const onSubmit = (myPostFormData) => {
		addPostActionCreator(myPostFormData.newPostText);
	}
	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<MyPostReduxForm onSubmit={onSubmit} />
			<div className={styles.posts}>
				{posts.map((item, index) => <Post key={index.toString()} post={item.post} likesCount={item.likesCount} />)}
			</div>

		</div >
	)
}

export default MyPosts;