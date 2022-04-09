import React from 'react';
import styles from './ErrorField.module.scss';
import cn from 'classnames';
const ErrorField = ({ error }) => {
	return (
		<div className={cn({ [styles.visible]: error }, styles.errorField)}>
			<h3>ERROR</h3>
			<li>{error}</li>
		</div>)
};
export default ErrorField;