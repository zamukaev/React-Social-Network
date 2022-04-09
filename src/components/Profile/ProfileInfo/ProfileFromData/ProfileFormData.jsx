import React from 'react';
import styles from '../../Profile.module.scss';

import { Field, reduxForm } from "redux-form";
import { Element } from '../../../common/FormsControls/FormsControls';

let ProfileFormData = ({ handleSubmit, profile, error }) => {
	const Input = Element('input');
	const Textarea = Element('textarea');
	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.save}><button >Save</button></div>
			{error && <div>{error}</div>}
			<div className={styles.name}>
				<Field component={Input} name="fullName" placeholder="Full name" />
			</div>
			<div className={styles.job}>
				<b>Looking for a job:</b>
				<Field component={Input} type={'checkbox'} name="lookingForAJob" />
			</div>
			<div className={styles.lookingJob}>

				<Field component={Textarea} name="lookingForAJobDescription" placeholder="My professional skills" />
			</div>
			<div className={styles.aboutMe}>

				<Field component={Textarea} name="aboutMe" placeholder="About me" />
			</div>
			<b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
				return (
					<div className={styles.contacts} key={key}>
						<b> <Field component={Input} name={"contacts." + key} placeholder={key} /></b>
					</div>)
			})}
		</form>
	)
};
const ProfileFormRedux = reduxForm({ form: 'profile' })(ProfileFormData)
export default ProfileFormRedux;