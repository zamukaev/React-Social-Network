
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}

};
const mapDispatchToProps = (dispatch) => {
	return {
		addPostHandler: () => {
			dispatch(addPostActionCreator());
		},
		updatePostHandler: (value) => {
			dispatch(updateNewPostTextActionCreator(value));
		}

	}
}
const MyPostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps

)(MyPosts);
export default MyPostsContainer
