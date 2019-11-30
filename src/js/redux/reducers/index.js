import {
    ADD_ARTICLE, COMMENT_DATA_LOADED, COMMENT_DATA_REQUESTED,
    DATA_LOADED,
    DATA_REQUESTED,
    FOUND_BAD_WORD,
    REMOVE_ALL_ARTICLES, REMOVE_ALL_COMMENTS,
    REMOVE_ARTICLE, REMOVE_COMMENT
} from '../../constants/action-types';

const initialState = {
    articles: [],
    comments: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: state.articles.concat(action.payload)
            };
        case REMOVE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload.id)
            };
        case REMOVE_ALL_ARTICLES:
            return {
                ...state,
                articles: [],
            };
        case FOUND_BAD_WORD:
            console.log(FOUND_BAD_WORD);
            return state;
        case DATA_LOADED:
            return {
                ...state,
                articles: action.payload,
            };

        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload.id)
            };
        case REMOVE_ALL_COMMENTS:
            return {
                ...state,
                comments: [],
            };
        case COMMENT_DATA_REQUESTED:
            console.log(COMMENT_DATA_REQUESTED);
            return state;
        case COMMENT_DATA_LOADED:
            return {
                ...state,
                comments: action.payload,
            };
        default:
            return state;
    }
};


export default rootReducer;