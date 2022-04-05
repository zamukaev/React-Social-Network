import styles from './ErrorField.module.css'
import cn from 'classnames'
const ErrorField = ({ error }) => {
	return (
		<div className={cn({ [styles.visible]: error }, styles.errorField)}>
			<h3>ERROR</h3>
			<li>{error}</li>
		</div>)
};
export default ErrorField;