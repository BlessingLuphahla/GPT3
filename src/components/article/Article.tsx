import { Children } from "react";
import "./article.css";

interface ArticleProp {
  children: any;
  title: string;
  date: string;
}

function Article({ children, title, date }: ArticleProp) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <div>{children}</div>
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  );
}

export default Article;
