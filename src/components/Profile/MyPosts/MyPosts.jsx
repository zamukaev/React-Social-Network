import React from 'react';
import styles from './MyPosts.module.scss';

import { reduxForm } from 'redux-form';

import MyPostForm from '../MyPosts/MyPostForm';
import Post from './Post/Post';



const MyPosts = ({ posts, addPostActionCreator, profile }) => {
	const MyPostReduxForm = reduxForm({ form: 'newPostText' })(MyPostForm);
	const onSubmit = (myPostFormData) => {
		addPostActionCreator(myPostFormData.newPostText);
	}
	return (
		<div className={styles.content}>
			<MyPostReduxForm onSubmit={onSubmit} />
			<div className={styles.post}>
				{posts.map((item, index) => <Post key={index.toString()} profile={profile} post={item.post} likesCount={item.likesCount} />).reverse()}
			</div>
		</div >
	)
};

export default MyPosts;