import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsItem }) => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts postsItem={postsItem} />
		</div>
	)
}

export default Profile;