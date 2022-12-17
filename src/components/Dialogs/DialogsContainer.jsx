import { connect } from "react-redux";

import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageActionCreator);
    },
    sendMessageActionCreator: (body) => {
      dispatch(updateNewMessageActionCreator(body));
    },
  };
};

const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default dialogsContainer;
