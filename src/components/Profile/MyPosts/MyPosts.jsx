import React from 'react';
import { reduxForm } from 'redux-form';

import MyPostForm from '../MyPosts/MyPostForm';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({ posts, addPostActionCreator, }) => {
	const MyPostReduxForm = reduxForm({ form: 'newPostText' })(MyPostForm);
	const onSubmit = (myPostFormData) => {
		addPostActionCreator(myPostFormData.newPostText);
	}

	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<MyPostReduxForm onSubmit={onSubmit} />
			<div className={styles.posts}>
				{posts.map((item, index) => <Post key={index.toString()} post={item.post} likesCount={item.likesCount} />).reverse()}
			</div>
		</div >
	)
}

export default MyPosts;