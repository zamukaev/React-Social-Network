
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {

	return {
		state: state.dialogsPage
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addMessageHandler: () => {
			let action = sendMessageCreator();
			dispatch(action);
		},
		updateMessageHandler: (value) => {
			let action = updateNewMessageTextCreator(value);
			dispatch(action);

		}
	}
}

const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps

)(Dialogs)
export default DialogsContainer