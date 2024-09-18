import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesById } from "../api";
import { CommentSection } from "./CommentSection";

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
        <p> Created on: {article.created_at}</p>
        <h3> By: {article.author}</h3>
        <p> {article.body}</p>
        <h3> Votes: {article.votes}</h3>
      </div>
      <CommentSection />
    </>
  );
};
