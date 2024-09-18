import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesById, patchArticle } from "../api";
import { CommentSection } from "./CommentSection";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";

export const ArticleById = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  }, [article_id]);

  const handleVote = () => {
    setArticle((article) => {
      return { ...article, votes: article.votes + 1 };
    });
    patchArticle(article_id);
  };

  if (isLoading) {
    return <p> Loading...</p>;
  }

  if (isErr) {
    return <p> Error! </p>;
  }

  return (
    <>
      <div className="article-blog">
        <h2> Article Title: {article.title}</h2>
        <h3> Article Topic: {article.topic}</h3>
        <img src={article.article_img_url} />
        <p> {article.body}</p>

        <CardContent orientation="vertical">
          <div className="article-provided">
            <h4> By: {article.author + "        "} </h4>

            <p> Posted on: {article.created_at + "      "} </p>

            <p>
              {" "}
              Votes:{" "}
              {article.votes === 1
                ? article.votes + " like"
                : article.votes + " likes"}
            </p>
            <Button
              onClick={handleVote}
              variant="outlined"
              size="md"
              color="success"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              👍
            </Button>
          </div>
        </CardContent>
      </div>
      <CommentSection />
    </>
  );
};
