import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { getUsers } from "../api";
import "../App.css";
import { Link } from "react-router-dom";

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleLoginClick = (user) => {
    setLoggedInUser(user);
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
              <Link className="menu-item" to="/">
                <img
                  className="profile-pic"
                  src={user.avatar_url}
                  alt={`log in for ${user.name}`}
                />
              </Link>
              <p>{user.username}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
