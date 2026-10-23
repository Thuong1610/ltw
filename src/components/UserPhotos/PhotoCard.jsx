import React from "react";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import formatDateTime from "../../lib/formatDateTime";

/**
 * PhotoCard: one photo, its creation time, and all of its comments.
 */
function PhotoCard({ photo }) {
  const comments = photo.comments || [];
  return (
    <Card className="photo-card" variant="outlined">
      <CardMedia
        component="img"
        image={`/images/${photo.file_name}`}
        alt={`Uploaded ${formatDateTime(photo.date_time)}`}
        className="photo-card-image"
      />
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Posted {formatDateTime(photo.date_time)}
        </Typography>
        <Divider className="photo-card-divider" />
        {comments.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No comments yet.
          </Typography>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="photo-comment">
              <Typography variant="body2">
                <Link to={`/users/${comment.user._id}`}>
                  {comment.user.first_name} {comment.user.last_name}
                </Link>
                <span className="photo-comment-date">
                  {formatDateTime(comment.date_time)}
                </span>
              </Typography>
              <Typography variant="body1">{comment.comment}</Typography>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default PhotoCard;
