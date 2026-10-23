import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";
import PhotoCard from "./PhotoCard";

/**
 * UserPhotos: every photo of the user given by :userId, each with its comments.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (photos.length === 0) {
    return <Typography>This user has not posted any photos.</Typography>;
  }

  return (
    <Box>
      {photos.map((photo) => (
        <PhotoCard key={photo._id} photo={photo} />
      ))}
    </Box>
  );
}

export default UserPhotos;
