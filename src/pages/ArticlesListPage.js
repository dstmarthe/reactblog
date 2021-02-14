import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <u>
      <h1>Articles</h1>
    </u>

    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
