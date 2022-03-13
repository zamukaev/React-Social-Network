import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";
import withAuthRedirect from '../hoc/withAuthRedirect';
import Dialogs from "./Dialogs";


// let AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
	}
};



export default compose(
	connect(mapStateToProps, { sendMessageCreator, updateNewMessageTextCreator }),
	withAuthRedirect
)(Dialogs);