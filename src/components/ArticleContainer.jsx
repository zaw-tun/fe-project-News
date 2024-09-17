import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";

import { ArticleCard } from "./ArticleCard";

import { CssVarsProvider } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const params = { params: { topic: topicQuery } };

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  }, [topicQuery]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isErr) {
    return <p> {err} </p>;
  }

  return (
    <CssVarsProvider>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={6}>
          {articles.map((article, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </CssVarsProvider>
  );
};
