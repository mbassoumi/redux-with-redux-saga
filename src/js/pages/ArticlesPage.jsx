import React, {useState, useMemo}  from 'react';
import {useDispatch, useSelector}  from 'react-redux';
import {MemorizedArticle}          from './components/Article';
import {addArticle, fetchArticles} from './actions';


const articlesStyle = {
    border : 'solid 1px black',
    margin : '10px',
    padding: '10px'
};

const ArticlesPage = () => {

    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);


    const articlesList = useMemo(() => articles.map((article, index) => (
        <MemorizedArticle key={index} body={article.body} id={article.id} title={article.title}/>
    )), [articles]);


    return (
        <div>
            <div style={articlesStyle}>
                <input type='text' placeholder='title' onChange={e => setTitle(e.target.value)}/>
                <input type='text' placeholder='body' onChange={e => setBody(e.target.value)}/>
                <button onClick={
                    () => dispatch(addArticle({id: 1, title, body}))
                }>Add Article
                </button>
                <br/>
                <hr/>
                <button onClick={
                    () => dispatch(fetchArticles())
                }>Fetch articles from https://jsonplaceholder.typicode.com/posts
                </button>
            </div>
            <div style={articlesStyle}>
                <h1>Articles</h1>
                {articlesList}
            </div>
        </div>
    );
};


export default ArticlesPage;