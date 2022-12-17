import React from "react";
import classes from "./Profile.module.css"

export default function ProfileInfo() {
  return (
    <div>
      <div className="contentImg">
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" />
      </div>
      <div className={classes.desp}>
      <div>ava</div>
      <div>sdfsdf</div>
      </div>
    </div>
  );
}
