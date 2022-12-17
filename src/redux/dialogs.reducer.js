const UPDATE_NEW_MESSAGE_BUDY='UPDATE-NEW-MESSAGE-BUDY';
const SEND_MESSAGE='SEND-MESSAGE';


let initialState = {
  dialogs: [
    { name: "andret", id: 1 },
    { name: "sveta", id: 2 },
    { name: "valera", id: 3 },
    { name: "nikite", id: 4 },
    { name: "pasha", id: 5 },
    { name: "vera", id: 6 },
  ],
  messages: [
    { message: "andret", id: 1 },
    { message: "sveta", id: 2 },
    { message: "valera", id: 3 },
    { message: "nikite", id: 4 },
    { message: "pasha", id: 5 },
    { message: "vera", id: 6 },
  ],
  newMessageBody:'sdfsdf',
}



const dialogsReducer =(state=initialState,action)=>{
  switch(action.type){
  case UPDATE_NEW_MESSAGE_BUDY:

 state.newMessageBody=action.body;
 return state;
 
case SEND_MESSAGE:
  let body=state.newMessageBody;
  state.newMessageBody='';
  state.messages.push({message: body, id: 7})
  



  return state;
  default: return state;
}}
export const updateNewMessageActionCreator=(body) => {
  return{type:UPDATE_NEW_MESSAGE_BUDY, body:body}
}
export const sendMessageActionCreator=()=>{
 return{type:SEND_MESSAGE}
}
export default dialogsReducer;