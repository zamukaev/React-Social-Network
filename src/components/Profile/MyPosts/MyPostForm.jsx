import React from "react";
import { Field } from "redux-form";
import { Element } from "../../comon/FormsControls/FormsControls";
import { required } from "../../../utils/validators";
import { maxLengthCreator } from "../../../utils/validators";
const maxLength100 = maxLengthCreator(100, 5);
const Textarea = Element('textarea');
const MyPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field name="newPostText" component={Textarea} placeholder="add your post please" validate={[required, maxLength100]}></Field></div>
			<div><button>add post</button></div>
		</form>
	)
};

export default MyPostForm;