import {ADD_ARTICLE, DATA_REQUESTED} from '../../constants/action-types';

export const addArticle = (payload) => {
    console.log('payload', payload);
    return {
        type: ADD_ARTICLE,
        payload
    }
};

export const fetchArticles = () => {
    return {
        type: DATA_REQUESTED,
    }
};

