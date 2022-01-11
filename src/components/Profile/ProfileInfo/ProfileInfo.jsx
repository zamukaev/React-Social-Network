import React from "react";
import styles from './ProfileInfo.module.css'
const ProfileInfo = () => {
	return (
		<div >
			<div>
				<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
			</div>
			<div className={styles.discriptionBlock}>
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;