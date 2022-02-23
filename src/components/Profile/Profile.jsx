import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = () => {
	return (
		<div className={styles.content}>
			<ProfileInfoContainer />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;