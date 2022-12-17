import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={ navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Seiings" className={ navData => navData.isActive ? classes.active : classes.item }>Setiings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="sssss" className={ navData => navData.isActive ? classes.active : classes.item }>ssssss</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="ssssss" className={ navData => navData.isActive ? classes.active : classes.item } >ssssss</NavLink>
      </div>
    </nav>
  );
}
