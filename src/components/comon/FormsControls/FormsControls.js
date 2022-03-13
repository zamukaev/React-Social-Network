import styles from './FormsControls.module.css'
// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
// 	<div>
// 		<label>{label}</label>
// 		<div>
// 			<input {...input} placeholder={label} type={type} />
// 			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
// 		</div>
// 	</div>
// )
// export const Input = ({ input, meta: { touched, error, warning }, ...props }) => {
// 	return (
// 		<div className={styles.formControl + ' ' + (touched && error ? styles.error : '')} >
// 			<div>
// 				<input {...input} {...props} />
// 			</div>
// 			{touched && error && <span>{error}</span>}
// 		</div>
// 	)
// }
// export const Textarea = ({ input, meta: { touched, error, warning }, ...props }) => {
// 	return (
// 		<div className={styles.formControl + ' ' + (touched && error ? styles.error : '')} >
// 			<div>
// 				<textarea {...input} {...props} />
// 			</div>
// 			{touched && error && <span>{error}</span>}
// 		</div>
// 	)
// };

export const Element = (Element) => {
	return ({ input, meta, ...props }) => {
		const hasError = meta.touched && meta.error;
		return (
			<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
				<Element {...input} {...props} />
				{hasError && <span> {meta.error} </span>}
			</div>
		)
	}
}