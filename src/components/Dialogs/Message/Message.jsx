import React from "react";
import styles from './Message.module.css';
const Message = ({ message, img }) => {
	return (
		< div className={styles.item} >
			<img width="30" src={img} alt="" />
			<h3>{message}</h3>
		</div >

	);
}

export default Message;