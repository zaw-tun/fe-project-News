import { createContext, useState } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [onArticle, setOnArticle] = useState({});
  return (
    <ArticleContext.Provider value={{ onArticle, setOnArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
