import React from "react";
import { Contacts } from "../ProfileInfo";
const ProfileData = ({ profile, isOwner, updateProfileStatusAC }) => {
	return (
		<div>
			<div>
				{isOwner && <button onClick={() => updateProfileStatusAC(false)}>Edit</button>}
			</div>
			<div><b>Full name</b>: {profile.fullName}</div>
			<div><b> Looking for a Job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
			{
				profile.lookingForAJob &&
				<div>
					<b>My professional skills</b>: {profile.lookingForAJobDescription}
				</div>
			}
			<div>
				<b>About me</b>	:{profile.aboutMe}
			</div>
			{Object.keys(profile.contacts).map(key => (<Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />))}
		</div>
	)
}

export default ProfileData;