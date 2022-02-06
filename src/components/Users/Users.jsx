import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userImage from '../../image/01.png';
class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pages}&count=${this.props.count}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalCount(response.data.totalCount)
			});

	}
	onClickHandler = (pageNumber) => {
		this.props.setPages(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let pageCount = Math.ceil(this.props.totalCount / this.props.count);
		let pages = [];
		for (let i = 1; i < pageCount; i++) {
			pages.push(i)
		}
		return (
			<div>
				<div>
					{pages.map(p => {
						return <span key={p} onClick={() => this.onClickHandler(p)} className={this.props.pages === p ? styles.selectPages : null}>{p}</span>
					})}
				</div>
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