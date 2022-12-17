import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";



export default function DialogsItem(props) {
  let path = "dialogs/" + props.id;
  return (
    <div>
      
      <NavLink dialogs={props.dialogs} message={props.message}
        to={path}
        className={(dData) => (dData.isActive ? classes.active : classes.item)}
      >
        {props.name}
      </NavLink>
    </div>
  );
}
