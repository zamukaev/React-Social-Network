import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../image/02.png';
import profiIcon from '../../image/icons/01.png';
import chatIcon from '../../image/icons/03.png';
import userIcon from '../../image/icons/02.png';

const Header = ({ login, isAuth, logout }) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.logo}>
					<img src={logo} alt="" />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.menu}>

						<li className={styles.link}>
							<NavLink to="/profile" className={data => data.isActive ? styles.active : null}>
								<img src={profiIcon} alt="" />
								<span>Profile</span>
							</NavLink>
						</li>

						<li className={styles.link}>
							<NavLink to="/message" className={data => data.isActive ? styles.active : null}>
								<img src={chatIcon} alt="" />
								<span>chat</span>
							</NavLink>
						</li>

						<li className={styles.link}>
							<NavLink to="/users" className={data => data.isActive ? styles.active : null}>
								<img src={userIcon} alt="" />
								<span>users</span>
							</NavLink>
						</li>
					</ul>
				</nav>
				{/* <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' /> */}
				{/* {isAuth ? <div onClick={logout} className={styles.login}>{login}</div> : <NavLink to='/login'> <div className={styles.login}>login</div> </NavLink>} */}

				{isAuth ?
					<div onClick={logout} className={styles.user}>
						<div className={styles.icon}>
							{/* <img src={profImg} alt="" /> */}
						</div>
						<div className={styles.info}>
							<div className={styles.name}>{login}</div>
						</div>
					</div>
					:
					<NavLink to='/login'> <div className={styles.login}>login</div> </NavLink>}
			</div>

		</header>
	)
};

export default Header;
