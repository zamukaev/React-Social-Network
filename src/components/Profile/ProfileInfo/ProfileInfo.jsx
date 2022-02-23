import React from "react";
import Preload from "../../comon/preload";
import styles from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
	console.log(props.profile)
	return (
		!props.profile ? <Preload /> : <div >
			<div>
				<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
			</div>
			<div>
				<p>	<img src={props.profile.photos.large} alt="" /></p>
				<p>{props.profile.aboutMe}</p>
				<p>{props.profile.fullName}</p>
			</div>

		</div>
	);
}

export default ProfileInfo;