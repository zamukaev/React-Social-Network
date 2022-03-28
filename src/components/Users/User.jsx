import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Users.module.css';
import userImage from '../../image/01.png';


const User = ({ user, btnUnFollowHandler, btnFollowHandler, followingInProgress }) => {
	return (
		<div key={user.id}>
			<NavLink to={`/profile/${user.id}`} >
				<img className={styles.usersImage} src={user.photos.small !== null ? user.photos.small : userImage} alt="" />
				<h3>{user.name}</h3>
			</NavLink>
			<p>{'item.location.city'}</p>
			<p>{'item.location.country'}</p>
			<div>
				{
					user.followed ?
						<button onClick={() => btnUnFollowHandler(user.id)} disabled={followingInProgress.some(id => id === user.id)} >unfollow</button>
						: <button onClick={() => btnFollowHandler(user.id)} disabled={followingInProgress.some(id => id === user.id)}>follow</button>
				}
			</div>
		</div>
	)
}

export default User;