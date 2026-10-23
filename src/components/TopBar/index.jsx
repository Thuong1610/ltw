import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

const STUDENT_NAME = "Thuong_B23DCAT293";

/**
 * TopBar: student name on the left, context of the main view on the right.
 */
function TopBar() {
  const { pathname } = useLocation();
  const detail = matchPath("/users/:userId", pathname);
  const photos = matchPath("/photos/:userId", pathname);
  const userId = (detail || photos)?.params.userId;
  const user = userId ? models.userModel(userId) : null;

  let context = "";
  if (user) {
    const name = `${user.first_name} ${user.last_name}`;
    context = photos ? `Photos of ${name}` : name;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h5" color="inherit">
          {STUDENT_NAME}
        </Typography>
        <Typography variant="h6" color="inherit" className="topbar-context">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
