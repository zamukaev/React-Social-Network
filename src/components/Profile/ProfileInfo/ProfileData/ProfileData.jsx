import React from 'react';
import styles from '../../Profile.module.scss';

import { Contacts } from "../ProfileInfo";
const ProfileData = ({ profile, isOwner, updateProfileStatusAC }) => {
	return (
		<div className={styles.profileInfoItem}>
			<div className={styles.edit}>
				{isOwner && <button onClick={() => updateProfileStatusAC(false)}>Edit</button>}
			</div>
			<div className={styles.name}><b>Full name</b>: {profile.fullName}</div>
			<div className={styles.job}><b> Looking for a Job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
			{
				profile.lookingForAJob &&
				<div className={styles.lookingJob}>
					<b>My professional skills</b>: {profile.lookingForAJobDescription}
				</div>
			}
			<div className={styles.aboutMe}>
				<b>About me</b>	:{profile.aboutMe}
			</div>
			{Object.keys(profile.contacts).map(key => (<Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />))}
		</div>
	)
};

export default ProfileData;