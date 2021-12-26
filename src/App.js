import './App.css';
import Article from './Article';
// // import { Routes, Route, Redire } from 'react-router-dom';
// import ArticleCreate from './components/articles/ArticleCreate';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Article />
      {/* <Routes>
        <Route path="/" exact element={<Article />} />
        <Route path="/create/article" element={<ArticleCreate />} />
        
      </Routes> */}
    </>
  );
}

export default App;
