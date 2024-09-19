import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export const CommentCard = ({ comment }) => {
  return (
    <>
      <Card sx={{ width: 200 }}>
        <div>
          <Typography level="body-xs">{comment.body}</Typography>
        </div>
        <div>
          <Typography level="body-lg">{comment.author}</Typography>
        </div>
        <CardContent orientation="horizontal">
          <p>
            {" "}
            {comment.votes === 1
              ? comment.votes + " like"
              : comment.votes + " likes"}
          </p>

          <Button
            variant="outlined"
            size="md"
            color="success"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            👍
          </Button>

          <Button
            variant="outlined"
            size="md"
            color="danger"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            👎
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
