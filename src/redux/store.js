import profileReducer from "./profile.reducer";
import sidebarReducer from "./sidebar.reducer";
import dialogsReducer from "./dialogs.reducer";

let store = {
  getState(){
     return this._state;
  },
  _state: {
    posts: [
      { message: "andret", id: 1, likeCounts: 12 },
      { message: "u now what i mean", id: 2, likeCounts: 121 },
      { message: "nope,i think u retard", id: 3, likeCounts: 122 },
      { message: "nikite", id: 4, likeCounts: 1552 },
      { message: "pasha", id: 5, likeCounts: 1222 },
      { message: "vera", id: 6, likeCounts: 12 },
    ],
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
    newPosts: "sdfssd",
  },
  _callsubscriber() {},
 
  subscribe(observe) {
   this._callsubscriber = observe;
  },
  dispatch(action) {
    this._state= profileReducer(this._state,action);
    this._state= dialogsReducer(this._state,action);
    this._state= sidebarReducer(this._state,action);
    this._callsubscriber(this._state);
  
  

  }
};




export default store;
// window.store=store;
