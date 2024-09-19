import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import * as React from "react";
import "../App.css";

export const BurgerMenu = () => {
  return (
    <Menu>
      <h2>
        {" "}
        <Link className="menu-item" to="/">
          All Articles{" "}
        </Link>
      </h2>

      {/* <Link className="menu-item" to="/?topic=cooking">
        Cooking
      </Link>
      <Link className="menu-item" to="/?topic=coding">
        Coding
      </Link>
      <Link className="menu-item" to="/?topic=football">
        Football
      </Link> */}
      <h2>
        {" "}
        <Link idclassName="menu-item" to="/user">
          Sign In{" "}
        </Link>
      </h2>
    </Menu>
  );
};
