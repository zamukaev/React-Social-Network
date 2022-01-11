import React from 'react';
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return <nav className={styles.nav}>
		<ul>
			<li className={styles.item}><NavLink to="/profile" className={data => data.isActive ? styles.active : null}>Profile</NavLink></li>
			<li className={styles.item}><NavLink to="/message" className={data => data.isActive ? styles.active : null}>Messages</NavLink></li>
			<li className={styles.item}><NavLink to="/news" className={data => data.isActive ? styles.active : null}>News</NavLink></li>
			<li className={styles.item}><NavLink to="/music" className={data => data.isActive ? styles.active : null}>Music</NavLink></li>
			<li className={styles.item}><NavLink to="/settings" className={data => data.isActive ? styles.active : null}>Settings</NavLink></li>
		</ul>
	</nav >
}

export default Navbar;