import React from 'react';
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom'

const Header = ({ login, isAuth }) => {

	return <header className={styles.header}>
		<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />


		<NavLink to='/login'>
			<div className={styles.login}>	{isAuth ? login : 'login'}
			</div>
		</NavLink>

	</header>
}

export default Header;