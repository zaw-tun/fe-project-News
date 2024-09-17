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
        <CardContent orientation="vertical">
          <div>
            <Typography level="body-xs">{comment.body}</Typography>
          </div>
          <Button
            variant="outline"
            size="md"
            color="success"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            👍
            {/* <Link to={`/articles/${article.article_id}`}> ❤️ </Link> */}
          </Button>
          <p> {comment.votes}</p>
          <Button
            variant="solid"
            size="md"
            color="error"
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
