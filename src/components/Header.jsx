import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../App.css";
import { Link } from "react-router-dom";

import { BurgerMenu } from "./BurgerMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <header className="header">
      <nav>
        <Stack direction="row" spacing={20}>
          <BurgerMenu />
          <h1 className="LogoHeading">NC News</h1>
          <Link to="/user">
            <Avatar
              alt={loggedInUser.name}
              src={loggedInUser.avatar_url}
              sx={{ width: 60, height: 60 }}
            />
          </Link>
        </Stack>
      </nav>
    </header>
  );
};
