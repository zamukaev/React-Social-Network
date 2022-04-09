import React from "react";
import styles from './Users.module.scss';

import { NavLink } from "react-router-dom";

import userImage from '../../image/01.png';


const User = ({ user, btnUnFollowHandler, btnFollowHandler, followingInProgress }) => {
	return (
		<div className={styles.users} key={user.id}>
			<NavLink to={`/profile/${user.id}`} >
				<div className={styles.usersImage}>
					<img src={user.photos.small !== null ? user.photos.small : userImage} alt="" />
				</div>
				<div className={styles.name}>
					{user.name}
				</div>
			</NavLink>
			<div className={styles.city}>{'item.location.city'}</div>
			<div className={styles.country}>{'item.location.country'}</div>
			<div className={styles.btn}>
				{
					user.followed ?
						<button onClick={() => btnUnFollowHandler(user.id)} disabled={followingInProgress.some(id => id === user.id)} >unfollow</button>
						: <button onClick={() => btnFollowHandler(user.id)} disabled={followingInProgress.some(id => id === user.id)}>follow</button>
				}
			</div>
		</div>
	)
};

export default User;