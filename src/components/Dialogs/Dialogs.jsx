import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData, messageItem }) => {


	let dialogsElement = dialogsData.map(item => <DialogItem name={item.name} id={item.id} />);
	let messageElement = messageItem.map(item => <Message message={item.message} id={item.id} />);
	return (
		<div className={styles.gialogs}>
			<div className={styles.dialogItems}>
				{dialogsElement}
			</div>
			<div className={styles.messages}>
				{messageElement}
			</div>
		</div>

	)
}
export default Dialogs;