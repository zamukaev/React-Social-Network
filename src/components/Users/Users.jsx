import React from "react";
import styles from './Users.module.css';
import userImage from '../../image/01.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {
	let pageCount = Math.ceil(props.totalCount / props.count);
	let page = [];
	for (let i = 1; i < pageCount; i++) {
		page.push(i);
	}

	const btnFollowHandler = (id) => {
		props.follow(id)

	}

	const btnUnFollowHandler = (id) => {
		props.unFollow(id)
	}

	return (
		props.isFetching ?
			<div><img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="" /></div>
			:
			<div >

				<div>
					{page.map(p => {
						return <span key={p} onClick={() => props.onClickHandler(p)} className={props.pages === p ? styles.selectPages : null}>{p}</span>
					})}
				</div>
				{
					props.users.map((item) => (
						<div key={item.id}>
							<NavLink to={`/profile/${item.id}`} >
								<img className={styles.usersImage} src={item.photos.small !== null ? item.photos.small : userImage} alt="" />
								<h3>{item.name}</h3>
							</NavLink>
							<p>{'item.location.city'}</p>
							<p>{'item.location.country'}</p>
							<div>
								{
									item.followed ?
										<button onClick={() => btnUnFollowHandler(item.id)} disabled={props.followingInProgress.some(id => id === item.id)} >unfollow</button>
										: <button onClick={() => btnFollowHandler(item.id)} disabled={props.followingInProgress.some(id => id === item.id)}>follow</button>
								}
							</div>
						</div>
					))
				}
			</div >
	)
}

export default Users;