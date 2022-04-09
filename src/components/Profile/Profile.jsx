
import React from 'react';
import styles from './Profile.module.scss';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = () => {
	return (
		<div className={styles.content}>
			<ProfileInfoContainer />
			<MyPostsContainer />
		</div>
	)
};

export default Profile;