import React from 'react';
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom'

const Header = ({ login, isAuth, logout }) => {
	return (
		<header className={styles.header}>
			<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

			{isAuth ? <div onClick={logout} className={styles.login}>{login}</div> : <NavLink to='/login'> <div className={styles.login}>login</div> </NavLink>}
		</header>
	)
};

export default Header;