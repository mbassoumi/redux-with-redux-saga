import {ADD_ARTICLE, REMOVE_ARTICLE, DATA_REQUESTED, REMOVE_ALL_ARTICLES} from '../../constants/action-types';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export const removeArticle = (payload) => {
    return {
        type: REMOVE_ARTICLE,
        payload
    }
};

export const removeAllArticles = () => {
    return {
        type: REMOVE_ALL_ARTICLES,
    }
};



export const fetchArticles = () => {
    return {
        type: DATA_REQUESTED,
    }
};

