import React from 'react';

const ArticleDetail = ({article}) => {
    return ( 
        <div className="article-detail">
    <div className="article">
        <img src=""/>
        <h2>{article?.title}</h2>
        <p>{article?.body}</p>
        <p>{article?.date}</p>
    </div>
</div>
     );
}
 
export default ArticleDetail;