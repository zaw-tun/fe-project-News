import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { getComments, postComment, deleteComment } from "../api";
import { CommentCard } from "./CommentCard";
import { UserContext } from "../contexts/UserContext";

import { CssVarsProvider } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CardContent from "@mui/joy/CardContent";

import TextField from "@mui/material/TextField";

export const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const { article_id } = useParams();
  const [usernameInput, setUsernameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        setIsLoading(false);
        setComments(comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  }, [article_id]);

  const handleCommentChange = (event) => setCommentInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loggedInUser.username);
    const newComment = {
      article_id,
      username: loggedInUser.username,
      body: commentInput,
    };
    setIsSubmitting(true);
    setCommentInput("");

    postComment(newComment)
      .then(() => {
        const adjustedComment = { votes: 0, ...newComment };
        setComments([adjustedComment, ...comments]);
        setIsSubmitting(false);
        return <p> Comment posted! </p>;
      })
      .catch(() => {
        console.log("error posting item, have you signed in?");
        setIsSubmitting(false);
        return <p> Comment posting failed</p>;
      });
  };

  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== commentId
    );
    setComments(updatedComments);

    deleteComment(commentId)
      .then(() => {
        setDeleteMessage("Comment deleted!");
      })
      .catch(() => {
        setDeleteMessage("Error Deleting comment!");
      });
  };

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
        <form className="commentForm" onSubmit={handleSubmit}>
          <label htmlFor="comment-box"> Leave a comment </label>
          {isSubmitting ? (
            <p> posting comment...</p>
          ) : (
            <CardContent orientation="vertical">
              <label htmlFor="commentText">
                <textarea
                  value={commentInput}
                  placeholder="Your Comment..."
                  onChange={(event) => {
                    handleCommentChange(event);
                  }}
                  rows="5"
                  cols="50"
                  required
                ></textarea>
              </label>
              <p>
                {" "}
                {loggedInUser.username
                  ? `You are posting as ${loggedInUser.name}`
                  : "Please sign in first. Guests can't post comments at the moment."}
                {}
              </p>
              <Button
                onClick={handleSubmit}
                variant="outlined"
                size="md"
                color="success"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Submit
              </Button>
            </CardContent>
          )}
        </form>
        {deleteMessage ? <div>{deleteMessage}</div> : null}
        <Box sx={{ padding: 10 }}>
          <Grid container spacing={5}>
            {comments.map((comment, index) => (
              <Grid xs={20} sm={6} md={4} key={index}>
                <CommentCard
                  comment={comment}
                  handleDeleteClick={handleDelete}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </CssVarsProvider>
    </>
  );
};
