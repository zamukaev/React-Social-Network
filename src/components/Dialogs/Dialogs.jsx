import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Message2 from "./Message/Message2";


const Dialogs = ({ state, addMessageHandler, updateMessageHandler }) => {
	const buttonHandler = (event) => {
		event.preventDefault();
		addMessageHandler();
	};

	const changeHandler = (event) => {
		let value = event.target.value;
		updateMessageHandler(value);
	};

	let dialogsElement = state.dialogsItem.map((item, index) => (
		<DialogItem key={index.toString()} name={item.name} id={item.id} />
	));

	let messageElement = state.messages.map((item, index) => (
		<Message key={index.toString()} message={item.message} img={item.img} id={item.id} />
	));
	return (
		<div className={styles.gialogs}>
			<div className={styles.dialogItems}>
				{dialogsElement}
			</div>
			<div className={styles.messages}>
				<div className={styles.item}>
					{messageElement}
				</div>
				<div className={styles.textarea}>
					<textarea onChange={changeHandler} value={state.newMessageText} placeholder="Enter your message"></textarea>
					<div><button onClick={buttonHandler}>send</button></div>
				</div >
			</div>
		</div>
	)
}
export default Dialogs;