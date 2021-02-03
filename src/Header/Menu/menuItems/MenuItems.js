import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuItems.module.css";
import { useAuth } from "../../../AuthContext/AuthContext";

const MenuItems = () => {
  const { logIn } = useAuth();
  const { setLogIn } = useAuth();
  const { setToken } = useAuth();
  return (
    <>
      <li>
        <NavLink to="/home" activeStyle={{ color: "#2b2b2b" }}>
          Pizza Builder
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders" activeStyle={{ color: "#2b2b2b" }}>
          Orders
        </NavLink>
      </li>
      {logIn !== true ? (
        <li className={classes.LogIn}>
          <NavLink
            to="/login"
            activeStyle={{ color: "#020A60" }}
            style={{ color: "#0572ec" }}
          >
            Log In
          </NavLink>
        </li>
      ) : (
        <li className={classes.liEl}>
          <button
            className={classes.LogOut}
            onClick={() => {
              setLogIn(false);
              setToken("");
              sessionStorage.removeItem("token");
            }}
          >
            Log Out
          </button>
        </li>
      )}
    </>
  );
};

export default MenuItems;
