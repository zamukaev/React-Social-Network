import React from "react";
import styles from "./Friends.module.css";
const Friends = ({ state }) => {
	return (
		<div>
			<h3 className={styles.title}>Friends</h3>
			<div className={styles.friendsRow}>
				{state.map(item => (
					<div key={item.id} className={styles.friendsColumn}>
						<img className={styles.avatarImg} src={item.img} alt="" />
						<div className={styles.subTitle}>{item.name}</div>
						<div><button className={styles.btn}>subscribe </button></div>
					</div>
				))
				}
			</div >
		</div>
	);
}

export default Friends;