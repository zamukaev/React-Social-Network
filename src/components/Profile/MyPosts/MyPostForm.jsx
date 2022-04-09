import React from "react";
import styles from './MyPosts.module.scss'

import { Field } from "redux-form";
import { Element } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators";
import { maxLengthCreator } from "../../../utils/validators";


const maxLength100 = maxLengthCreator(100, 5);
const Input = Element('textarea');

const MyPostForm = (props) => {
	return (
		<div className={styles.myPosts}>
			<form onSubmit={props.handleSubmit} className={styles.addNewPost} >
				<div className={styles.title}>
					new post
				</div>
				<div className={styles.input}>
					<Field name="newPostText" cols={100} rows="3" component={Input} placeholder="What’s on your mind?" validate={[required, maxLength100]}></Field>
					<button className={styles.btn}></button>
				</div>
			</form>
		</div>
		// <form onSubmit={props.handleSubmit}>
		// 	<div>
		// 		<Field name="newPostText" component={Textarea} placeholder="What’s on your mind?" validate={[required, maxLength100]}></Field>
		// 	</div>
		// 	<div><button>add post</button></div>
		// </form>
	)
};

export default MyPostForm;