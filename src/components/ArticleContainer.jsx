import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import "../App.css";

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
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const params = {
    params: { topic: topicQuery, sort_by: sortQuery, order: orderQuery },
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles(params)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  }, [topicQuery, sortQuery, orderQuery]);

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("sort_by", newSort);
      return newParams;
    });
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("order", newOrder);
      return newParams;
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isErr) {
    return <p> {err} </p>;
  }

  return (
    <CssVarsProvider>
      <div className="sorting">
        <form className="sortingForm">
          <select
            value={sortQuery || ""}
            onChange={(event) => {
              handleSortChange(event);
            }}
          >
            <option value=""> Sort By </option>
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
          </select>
          <select
            value={orderQuery || ""}
            onChange={(event) => {
              handleOrderChange(event);
            }}
          >
            <option value=""> Order </option>
            <option value="ASC">Aescending</option>
            <option value="DESC">Descending</option>
          </select>
        </form>
      </div>
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
