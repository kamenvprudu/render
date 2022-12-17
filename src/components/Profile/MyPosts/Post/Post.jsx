import React from "react";
import classes from "./Post.module.css";

export default function Post(props) {
  
  return (
    <div className={classes.item}>
   <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/>
   {props.message}
   <div>
     <span className={classes.itemColor}>likes </span>{props.likesCount}
   </div>
    </div>
  );
}
