import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
	// debugger;
	return (
		<div className={styles.item} >
			<img src="https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-man-trucker-farmer-ballcap-beard-overalls-128.png" alt="" />
			{props.post}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;