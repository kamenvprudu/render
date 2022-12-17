import  {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile.reducer";
import dialogsReduser from "./dialogs.reducer";
import sidebarReducer from "./sidebar.reducer";




let redusers = combineReducers({
  profileReducer,                 // может быть ошибка?<=
  dialogsReduser,
  // sidebarReduser,
})


let store = createStore(redusers);




export default store;