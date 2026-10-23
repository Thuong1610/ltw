import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * UserDetail: details of the user given by the :userId route parameter,
 * plus a link to that user's photos.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography color="error">User not found.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Divider />
      <dl className="user-detail-fields">
        <dt>Location</dt>
        <dd>{user.location}</dd>
        <dt>Occupation</dt>
        <dd>{user.occupation}</dd>
        <dt>Description</dt>
        <dd>{user.description}</dd>
      </dl>
      <Button variant="contained" component={Link} to={`/photos/${user._id}`}>
        View photos
      </Button>
    </Box>
  );
}

export default UserDetail;
