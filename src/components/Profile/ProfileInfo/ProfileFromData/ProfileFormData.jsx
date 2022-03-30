import { Field, reduxForm } from "redux-form";
import { Element } from '../../../common/FormsControls/FormsControls';
let ProfileFormData = ({ handleSubmit, profile, error }) => {
	const Input = Element('input');
	const Textarea = Element('textarea');
	return (
		<form onSubmit={handleSubmit}>
			<div><button >Save</button></div>
			{error && <div>{error}</div>}
			<b>Full name:</b>
			<Field component={Input} name="fullName" placeholder="Full name" />
			<b>Looking for a job:</b>
			<Field component={Input} type={'checkbox'} name="lookingForAJob" />
			<b>My professional skills:</b>
			<Field component={Textarea} name="lookingForAJobDescription" placeholder="My professional skills" />
			<b>About me:</b>
			<Field component={Textarea} name="aboutMe" placeholder="About me" />
			<b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
				return (
					<div key={key}>
						<b>{key}: <Field component={Input} name={"contacts." + key} placeholder={key} /></b>

					</div>)
			})}
		</form>
	)
}
const ProfileFormRedux = reduxForm({ form: 'profile' })(ProfileFormData)
export default ProfileFormRedux;