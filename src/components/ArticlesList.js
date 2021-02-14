import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        <div className="article-list-info">
          <h3 className="mt-3">{article.title}</h3>
          <p className="mt-1 mb-0 mx-auto">
            {article.content[0].substring(0, 150)}...
          </p>
          <p className="text-secondary mb-2 fs-6">Credits: {article.author}</p>
        </div>
      </Link>
    ))}
  </>
);

export default ArticlesList;
