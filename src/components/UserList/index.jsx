import React from "react";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * UserList: side bar listing every user; each name links to the user's detail.
 */
function UserList() {
  const users = models.userListModel();
  const { pathname } = useLocation();
  const selectedId = (
    matchPath("/users/:userId", pathname) || matchPath("/photos/:userId", pathname)
  )?.params.userId;

  return (
    <List component="nav" aria-label="Users">
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItemButton
            component={Link}
            to={`/users/${user._id}`}
            selected={user._id === selectedId}
          >
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;
