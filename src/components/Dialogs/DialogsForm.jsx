import React from "react";
import styles from './Dialogs.module.scss';

import { Field } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const Textarea = Element('textarea');
const maxLength100 = maxLengthCreator(100, 5);

const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={styles.input}><Field component={Textarea} placeholder="send your message" name="newMessageText" validate={[required, maxLength100]} /></div>
			<div><button className={styles.btn}>send message</button></div>
		</form>
	)
};
export default DialogsForm;