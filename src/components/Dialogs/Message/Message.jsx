import React from "react";
import styles from './Message.module.scss';

const Message = ({ message, img }) => {
	return (
		< div className={styles.message} >
			<div className={styles.img}><img width="30" src={img} alt="" /></div>
			<p className={styles.text}>{message}</p>
		</div >
	);
};

export default Message;