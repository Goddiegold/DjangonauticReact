import React from 'react';
import { Link } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';
const ArticleList = ({article, slugify}) => {

   
    return (
        <>
                <div className="article">
                    <h2><Link to={article.title}>{article.title}</Link></h2>
                    <p>{article.body}</p>
                    <p>{article.date}</p>
                    <p className='author'>added by {article.author}</p>
            </div>
            
           
        </>
      );
}
 
export default ArticleList;