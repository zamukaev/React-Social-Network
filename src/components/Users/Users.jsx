import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userImage from '../../image/01.png';
class Users extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items);
				console.log(response.data.items)
			});

	}

	render() {
		return (
			<div>
				{
					this.props.users.map((item) => (
						<div key={item.id}>
							<img className={styles.usersImage} src={item.photos.small !== null ? item.photos.small : userImage} alt="" />
							<h3>{item.name}</h3>
							<p>{'item.location.city'}</p>
							<p>{'item.location.country'}</p>
							<button onClick={() => this.props.toggleFollow(item.id)} >{item.followed ? 'followed' : 'unfollowed'}</button>
						</div>
					))
				}

			</div >
		);
	}

}

export default Users;