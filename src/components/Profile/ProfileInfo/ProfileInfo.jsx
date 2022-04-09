import React from "react";
import styles from '../Profile.module.scss';

import ProfileData from './ProfileData/ProfileData';
import ProfileFormRedux from "./ProfileFromData/ProfileFormData";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preload from "../../common/Preload/Preload";
import userImage from '../../../image/01.png';
import ErrorField from "../../common/ErrorField/ErrorField";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhotoThunk, saveProfile, updateProfileStatus, updateProfileStatusAC, error }) => {
	const onChangeInputHandler = (event) => {
		let saveMainPhoto = event.target.files[0]
		savePhotoThunk(saveMainPhoto);
	}
	if (!profile) {
		return <Preload />
	}
	const onChangeHandler = (profileData) => {
		saveProfile(profileData)
	}

	return (
		<div className={styles.sideBar} >
			<div className={styles.content}>
				{error && <ErrorField error={error} />}
				<div className={styles.profileImage}>

					<div>
						<img src={profile.photos.large ? profile.photos.large : userImage} alt="" />
						<div className={styles.file}>{isOwner && <input type="file" onChange={onChangeInputHandler} />}</div>
					</div>

					<div className={styles.name}> Full name: {profile.fullName}</div>

				</div>
				<div className={styles.profileInfo}>
					<ProfileStatus status={status} updateStatus={updateStatus} />
					{updateProfileStatus && <ProfileData isOwner={isOwner} updateProfileStatusAC={updateProfileStatusAC} profile={profile} saveProfile={saveProfile} />}
					{(!updateProfileStatus) && < ProfileFormRedux initialValues={profile} onSubmit={onChangeHandler} profile={profile} />}
				</div>
			</div>
		</div >
	);
};

export const Contacts = ({ contactsTitle, contactsValue }) => {

	return (
		<div className={styles.contacts}>
			<div className={styles.contacts}><b>{contactsTitle}: </b><a href={contactsValue} target="_blank">{contactsValue}</a></div>
		</div>
	)
}

export default ProfileInfo;
