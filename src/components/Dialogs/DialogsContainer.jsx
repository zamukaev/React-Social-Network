import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage
	}
};

const DialogsContainer = connect(mapStateToProps, { sendMessageCreator, updateNewMessageTextCreator })(Dialogs);
export default DialogsContainer;