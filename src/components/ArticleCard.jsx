import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { ArticleContext } from "../contexts/ArticleContext";
import { useContext, useState, useEffect } from "react";

export const ArticleCard = ({ article }) => {
  return (
    <>
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{article.title}</Typography>
          <Typography level="body-sm">
            {/* <Link to={`/articles/${article.topic}`}> */}
            {article.topic}
            {/* </Link> */}
          </Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img src={article.article_img_url} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">By {article.author}</Typography>
          </div>
          <Button
            variant="outlined"
            size="md"
            color="success"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            <Link to={`/articles/${article.article_id}`}>Read </Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
