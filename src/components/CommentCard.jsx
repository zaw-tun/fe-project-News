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
          <Typography level="title-lg">By {comment.author}</Typography>
        </div>

        <div>
          <Typography level="body-xs">{comment.body}</Typography>
        </div>
        <CardContent orientation="horizontal">
          <p> {comment.votes} likes</p>

          <Button
            variant="outlined"
            size="md"
            color="success"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            👍
            {/* <Link to={`/articles/${article.article_id}`}> ❤️ </Link> */}
          </Button>

          <Button
            variant="outlined"
            size="md"
            color="success"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            👎
            {/* <Link to={`/articles/${article.article_id}`}> ❤️ </Link> */}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
