import React from "react";
import styles from './DialogItem.module.css';
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={`/message/${props.id}`} className={data => data.isActive ? styles.active : null} >{props.name}</NavLink>
		</div>
	);
}
export default DialogItem;