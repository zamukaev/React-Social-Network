import React from "react";

import ProfileData from './ProfileData/ProfileData';
import ProfileFormRedux from "./ProfileFromData/ProfileFormData";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preload from "../../common/Preload/Preload";

import styles from './ProfileInfo.module.css';
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
		<div >
			{error && <ErrorField error={error} />}
			<div className={styles.profileImage}>
				<img src={profile.photos.large ? profile.photos.large : userImage} alt="" />
				{isOwner && <input type="file" onChange={onChangeInputHandler} />}
			</div>
			<ProfileStatus status={status} updateStatus={updateStatus} />
			{updateProfileStatus && <ProfileData isOwner={isOwner} updateProfileStatusAC={updateProfileStatusAC} profile={profile} saveProfile={saveProfile} />}
			{(!updateProfileStatus) && < ProfileFormRedux initialValues={profile} onSubmit={onChangeHandler} profile={profile} />}
		</div >
	);
};

export const Contacts = ({ contactsTitle, contactsValue }) => {

	return (
		<div>
			<div><b>{contactsTitle}: </b><a href={contactsValue} target="_blank">{contactsValue}</a></div>
		</div>
	)
}

export default ProfileInfo;