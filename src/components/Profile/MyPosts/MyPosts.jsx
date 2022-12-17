import React from "react";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function   MyPosts(props) {

let arrayPostData= props.posts.map((p)=><Post message={p.message} likesCount={p.likeCounts}/>);


let newPostElement = React.useRef();

let onAddPost = ()=>{
 
  // let text = newPostElement.current.value;
 props.addPost();

  // props.newPostText('') 
};

let onChangePostText = ()=> {
  let text =newPostElement.current.value;
  props.updateNewPostText(text);

}

  return (
    <div>
      <h2> Mypost</h2>
      <div>
        <div>
          <textarea onChange={onChangePostText} cols="30" rows="4" ref={newPostElement} value={props.newPosts}/>
        </div>
        <div>
          <button onClick={onAddPost}>AddPost</button>
        </div>
      </div>
      <div className={classes.message}>
      {arrayPostData}
      </div>
    </div>
  );
}
