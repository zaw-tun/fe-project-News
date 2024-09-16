import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://be-project-news-s6g0.onrender.com/api",
});

export const getArticles = (query) => {
  return ncNews.get("/articles", query).then(({ data }) => {
    return data;
  });
};
