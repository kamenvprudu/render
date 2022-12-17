import React from "react";
import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Content(props) {
  return (
    <div className={classes.content}>
 <ProfileInfo/>
      <MyPostsContainer  />
    </div>
  );
}
