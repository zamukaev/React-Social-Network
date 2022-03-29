import React, { useState } from "react";

import ProfileData from './ProfileData/ProfileData';
import ProfileFormRedux from "./ProfileFromData/ProfileFormData";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preload from "../../common/Preload";

import styles from './ProfileInfo.module.css';
import userImage from '../../../image/01.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhotoThunk, saveProfile }) => {
	const [editMode, setEditMode] = useState(true);
	const onChangeInputHandler = (event) => {
		let saveMainPhoto = event.target.files[0]
		savePhotoThunk(saveMainPhoto);
	}

	if (!profile) {
		return <Preload />
	}
	const onChangeHandler = (profileData) => {
		setEditMode(true)
		saveProfile(profileData)
	}

	return (
		<div >
			<div className={styles.profileImage}>
				<img src={profile.photos.large ? profile.photos.large : userImage} alt="" />
				{isOwner && <input type="file" onChange={onChangeInputHandler} />}
			</div>
			<ProfileStatus status={status} updateStatus={updateStatus} />
			{editMode && <ProfileData isOwner={isOwner} setEditMode={setEditMode} profile={profile} />}
			{!editMode && <ProfileFormRedux initialValues={profile} onSubmit={onChangeHandler} profile={profile} />}
		</div >
	);
};

export const Contacts = ({ contactsTitle, contactsValue }) => {
	return (
		<div>
			<div><b>{contactsTitle}: </b>{contactsValue}</div>

		</div>
	)
}

export default ProfileInfo;