import React from 'react';
import styles from './LoginForm.module.scss';

import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../utils/validators';
import { Element } from '../common/FormsControls/FormsControls';



const maxLength30 = maxLengthCreator(30, 2);
const passwordMaxLength10 = maxLengthCreator(10, 2);
const Input = Element('input');

const LoginForm = ({ handleSubmit, error, captcha }) => {

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.formItem}>
				<Field component={Input} name={'email'} placeholder={'Login'} validate={[required, maxLength30]} />
			</div>
			<div className={styles.formItem}>
				<Field component={Input} name={'password'} type="password" placeholder={'Password'} validate={[required, passwordMaxLength10]} />
			</div>
			{error && <div style={{ border: '1px solid red', color: 'red', width: '175px' }}>{error}</div>}
			<div className={styles.check}>
				<Field component={Input} name={'rememberMe'} type={'checkbox'} />remember me
			</div>
			{
				captcha &&
				<div>
					<img src={captcha} alt="captcha" />
					<Field component={Input} name={'captcha'} />
				</div>
			}

			<div>
				<button className={styles.btn} >Login</button>
			</div>
		</form >
	)
};
export const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

