import React, {Component} from 'react';

class ArticleCreate extends Component{
    state = {};
    render() {
        return (
          <>
            <div className="create-article">
              <form action="post" className="site-form">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" maxLength={100} required />

                <label htmlFor="title">Body: </label>
                <textarea name="body" id="body" cols={40} rows={10} required />

                <label htmlFor="title">Slug: </label>
                <input type="text" name="slug" maxLength={50} required />

                <label htmlFor="title">Thumb: </label>
                <input type="file" name="thumb" accept="image/*" id="thumb" />

                <input type="submit" value="Create" />
              </form>
            </div>
          </>
        );
   }
}
 
export default ArticleCreate;