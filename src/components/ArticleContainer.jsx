import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../api";

export const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <div>
        {articles.map((article, index) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </>
  );
};
