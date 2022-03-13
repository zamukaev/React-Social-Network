import React from "react";
import ProfileStatus from "./ProfileStatus";
import Preload from "../../comon/preload";
const ProfileInfo = (props) => {
	return (
		!props.profile ? <Preload /> : <div >
			<div>
				<p>	<img src={props.profile.photos.large} alt="" /></p>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
				<p>{props.profile.fullName}</p>
			</div>

		</div>
	);
}

export default ProfileInfo;