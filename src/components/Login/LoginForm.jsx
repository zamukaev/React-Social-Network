import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../utils/validators';
import { Element } from '../comon/FormsControls/FormsControls';
const maxLength30 = maxLengthCreator(30, 2);
const passwordMaxLength10 = maxLengthCreator(10, 2);
const Input = Element('input');

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Input} name={'email'} placeholder={'Login'} validate={[required, maxLength30]} />
			</div>
			<div>
				<Field component={Input} name={'password'} type="password" placeholder={'Password'} validate={[required, passwordMaxLength10]} />
			</div>
			<div>
				<Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
			</div>
			<div>
				<button  >Login</button>
			</div>
		</form>
	)
}
export const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

