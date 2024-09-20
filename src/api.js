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

export const patchArticle = (article_id) => {
  const patchArticle = {
    inc_votes: 1,
  };

  return ncNews
    .patch(`/articles/${article_id}`, patchArticle)
    .then(({ data }) => {
      return data;
    });
};

export const postComment = ({ article_id, username, body }) => {
  const postCommentData = {
    username,
    body,
  };
  return ncNews
    .post(`/articles/${article_id}/comments`, postCommentData)
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return ncNews.get("/users").then(({ data }) => {
    return data;
  });
};

export const deleteComment = (comment_id) => {
  console.log(comment_id);
  return ncNews.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};
