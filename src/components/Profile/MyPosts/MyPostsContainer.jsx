
import { connect } from "react-redux";
import { addPostActioinCreator, updateNewPostTextActionCreator } from "../../../redux/profile.reducer"; 
import store from "../../../redux/store";
import MyPosts from "./MyPosts";



let mapStateToProps=(state)=>{
return{
posts:state.posts,
newPostText:state.newPostText,
}
}
let mapDispatchToProps=(dispatch)=>{
  return{
  addPost:()=>{
    dispatch(addPostActioinCreator())
  },
  onChangePostText:(text)=>  {
    let action=updateNewPostTextActionCreator(text);
    dispatch(action)
  }
}}

const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
