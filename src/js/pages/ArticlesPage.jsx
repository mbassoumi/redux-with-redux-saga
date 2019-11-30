import React, {useState, useMemo}                                                                      from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MemorizedArticle}         from './components/Article';
import {MemorizedComment}         from './components/Comment';
import {
    addArticle,
    fetchArticles,
    fetchComments,
    removeAllArticles,
    removeAllComments,
    removeArticle,
    removeComment
}                                 from './actions';


const articlesStyle = {
    border : 'solid 1px black',
    margin : '10px',
    padding: '10px'
};

const ArticlesPage = () => {

    const articles = useSelector(state => state.articles);
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    const deleteArticle = (id) => {
        dispatch(removeArticle({id}));
    };
    const deleteComment = (id) => {
        dispatch(removeComment({id}));
    };


    const articlesList = useMemo(() => articles.map((article, index) => (
        <MemorizedArticle key={index} body={article.body} id={article.id} title={article.title}
                          onDelete={deleteArticle}/>
    )), [articles]);

    const commentsList = useMemo(() => comments.map((comment, index) => (
        <MemorizedComment key={index} id={comment.id} name={comment.name} email={comment.email} body={comment.body}
                          onDelete={deleteComment}/>
    )), [comments]);


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
                <button onClick={
                    () => dispatch(removeAllArticles())
                }>Remove All Articles
                </button>
                <hr/>
                <button onClick={
                    () => dispatch(fetchComments())
                }>fetch comments from https://jsonplaceholder.typicode.com/comments
                </button>
                <button onClick={
                    () => dispatch(removeAllComments())
                }>Remove All Articles
                </button>
            </div>
            <div style={articlesStyle}>
                <h1>Articles</h1>
                {articlesList}
            </div>
            <div style={articlesStyle}>
                <h1>Comments</h1>
                {commentsList}
            </div>

        </div>
    );
};


export default ArticlesPage;