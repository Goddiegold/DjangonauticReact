import React, { Component } from "react";
import ArticleList from "./components/articles/ArticleList";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticleCreate from "./components/articles/ArticleCreate";
import NotFound from "./components/NotFound";
import ArticleDetail from "./components/articles/ArticleDetail";

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = `${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()}`;
class Article extends Component {
  state = {
    articles: [
      {
        id: 0,
        title: "Article1",
        body: "body1",
        date: day,
        thumb: "img1",
        author: "author",
      },
      {
        id: 1,
        title: "Article2",
        body: "body2",
        date: day,
        thumb: "img2",
        author: "author",
      },
      {
        id: 2,
        title: "Article3",
        body: "body3",
        date: day,
        thumb: "img3",
        author: "author",
      },
    ],

    selectedArticle: 0,
  };

  slugify = (val) => {
    return val
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[\s\W-]+/g, "-"); // Replace spaces, non-word characters and dashes with a single dash (-)
  };

  handleDetail = () => {
     const { articles,selectedArticle } = this.state;
    const selArt = articles[selectedArticle];
    // return selArt;
    // console.log(selArt);
    return selArt;
  };

  render() {
    const { articles } = this.state,
      article = this.handleDetail();
    // {console.log(article.title)}
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div className="wrapper">
                <h1>Article List</h1>
                <div className="articles">
                  {articles.map((article) => (
                    <ArticleList
                      key={article.id}
                      article={article}
                      // handleDetail={this.handleDetail}
                      slugify={this.slugify}
                    />
                  ))}
                </div>
              </div>
            )}
          />

{/* {this.handleDetail()} */}
          <Route path="/create/article" render={() => <ArticleCreate />} />

          <Route path={article.title}
            // render={() => <ArticleDetail article={article} />} 
      component={ArticleDetail}
            />
                        
            {/* <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" /> */}
        </Switch> 
      </>
    );
  }
}

export default Article;
