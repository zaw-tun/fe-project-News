import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://be-project-news-s6g0.onrender.com/api",
});

export const getArticles = (query) => {
  return ncNews.get("/articles", query).then(({ data }) => {
    return data;
  });
};

export const getArticlesById = (article_id) => {
  return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
