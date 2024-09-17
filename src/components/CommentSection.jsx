import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments } from "../api";
import { CommentCard } from "./CommentCard";

import { CssVarsProvider } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";

export const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        console.log(comments);
        setIsLoading(false);
        setComments(comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  }, [article_id]);

  if (isLoading) {
    return <p> Loading... </p>;
  }

  if (isErr) {
    return <p> Error! </p>;
  }

  return (
    <>
      <h1> Comments Section </h1>
      <CssVarsProvider>
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={6}>
            {comments.map((comment, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <CommentCard comment={comment} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </CssVarsProvider>
    </>
  );
};
