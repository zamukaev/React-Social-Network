import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = ({ postsItem }) => {
	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>	<textarea></textarea></div>
				<div><button>Add post</button></div>
			</div>
			<div className={styles.posts}>
				{postsItem.map(item => <Post post={item.post} likesCount={item.likesCount} />)}
			</div>

		</div>
	)
}

export default MyPosts;