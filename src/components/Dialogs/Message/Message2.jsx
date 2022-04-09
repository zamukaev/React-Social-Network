import React from "react";
import styles from './Message.module.scss';
const Message2 = ({ state }) => {

	return (
		<div className={styles.column}>
			{state.messages2.map(item => (
				< div key={item.id} className={styles.item2} >
					<img width="30" src={item.img} alt="" />
					<h3>{item.message}</h3>

				</div >
			))}
		</div>
	);
};

export default Message2;