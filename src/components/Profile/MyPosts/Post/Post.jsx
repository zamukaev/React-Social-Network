import React from "react";
import styles from './Post.module.scss'

import Preload from "../../../common/Preload/Preload";

const Post = ({ post, profile, likesCount }) => {
	if (!profile) {
		return <Preload />
	}
	return (
		<div className={styles.posts} >
			<div className={styles.author}>
				<div className={styles.authorImg}>
					<img src={profile.photos.small ? profile.photos.small : ""} alt="" />
				</div>
				<div className={styles.PostText}>
					{post}
				</div>
			</div>
			<div>
				<span>like</span> {likesCount}
			</div>
		</div>
	);
};

export default Post;