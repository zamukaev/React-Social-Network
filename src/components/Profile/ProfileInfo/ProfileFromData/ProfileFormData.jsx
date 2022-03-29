import { Field, reduxForm } from "redux-form";
import { Element } from '../../../common/FormsControls/FormsControls';
let ProfileFormData = ({ handleSubmit, profile }) => {
	const Input = Element('input');
	const Textarea = Element('textarea');
	return (
		<form onSubmit={handleSubmit}>
			<div><button >Save</button></div>
			<b>Full name:</b>
			<Field component={Input} name="fullName" placeholder="Full name" />
			<b>Looking for a job:</b>
			<Field component={Input} type={'checkbox'} name="lookingForAJob" />
			<b>My professional skills:</b>
			<Field component={Textarea} name="lookingForAJobDescription" placeholder="My professional skills" />
			<b>About me:</b>
			<Field component={Textarea} name="aboutMe" placeholder="About me" />
			{/* {Object.keys(profile.contacts).map(key => (<Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />))} */}
		</form>
	)
}
const ProfileFormRedux = reduxForm({ form: 'profile' })(ProfileFormData)
export default ProfileFormRedux;