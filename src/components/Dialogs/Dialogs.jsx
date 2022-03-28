import React from "react";

import { reduxForm } from "redux-form";

import DialogItem from "./DialogItem/DialogItem";
import DialogsForm from "./DialogsForm";
import Message from "./Message/Message";

import styles from './Dialogs.module.css';




const Dialogs = ({ state, sendMessageCreator }) => {
	const AddMessageFormRedux = reduxForm({ form: 'newMessageText' })(DialogsForm);
	const addMessageHandle = (NewMessageData) => {
		sendMessageCreator(NewMessageData.newMessageText);
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
					<AddMessageFormRedux onSubmit={addMessageHandle} />
				</div >
			</div>
		</div>
	)
}
export default Dialogs;