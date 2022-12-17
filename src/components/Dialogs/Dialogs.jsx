import React from "react";

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";


export default function Dialogs(props) {
    let state=props.dialogs;
  let arrayDialogsData = props.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let arrayMessage = props.messages.map((m) => <Message message={m.message} />);
  let newMessageBody=props.newMessageBody;

let onMessageClick =()=>{
props.sendMessage();
};
let onNewMessageChange =(e)=>{
let body= e.target.value;
props.updateNewMessageBody(body)

}
  return (
    <div className={classes.dialog}>
      <div className={classes.item}>{arrayDialogsData}</div>
      <div className={classes.messages}>
        <div>{arrayMessage}</div>
        <div>
          <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="sensd"></textarea></div>
          <div><button onClick={onMessageClick}>send
            </button></div>
        </div>
      </div>
    </div>
  );
}
