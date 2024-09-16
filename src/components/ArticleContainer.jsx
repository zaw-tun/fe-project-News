import { useEffect, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import { ArticleCard } from "./ArticleCard";
import Box from "@mui/joy/Box";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category_name");
  const params = { params: { article_id: articleIdQuery } };

  useEffect(() => {
    getArticles(params).then(({ articles }) => {
      setArticles(articles);
    });
  }, [articleIdQuery]);

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
