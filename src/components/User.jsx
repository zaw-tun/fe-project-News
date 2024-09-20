import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { getUsers } from "../api";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginClick = (user) => {
    setLoggedInUser(user);
    navigate(-1);
  };

  return (
    <section className="content">
      <h4> You are logged in as {loggedInUser.username || "Guest"}</h4>
      <p> Click an image to change </p>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li
              key={user.username}
              onClick={() => {
                handleLoginClick(user);
              }}
            >
              <Card variant="outlined" sx={{ width: 500 }}>
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img
                      className="profile-pic"
                      src={user.avatar_url}
                      alt={`log in for ${user.name}`}
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md">{user.username}</Typography>
                  <Typography level="body-sm">{user.name}</Typography>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
