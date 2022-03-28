import React from "react";
import ProfileStatus from "./ProfileStatus";
import Preload from "../../common/Preload";

import styles from './ProfileInfo.module.css';
import userImage from '../../../image/01.png';
const ProfileInfo = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preload />
	}
	return (
		<div >
			<div>
				<div className={styles.profileImage}>	<img src={profile.photos.large ? profile.photos.large : userImage} alt="" /></div>
				<ProfileStatus status={status} updateStatus={updateStatus} />
				<p>{profile.fullName}</p>
			</div>
		</div >
	);
};

export default ProfileInfo;