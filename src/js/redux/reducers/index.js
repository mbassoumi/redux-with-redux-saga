import {ADD_ARTICLE, DATA_LOADED, DATA_REQUESTED, FOUND_BAD_WORD} from '../../constants/action-types';

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: state.articles.concat(action.payload)
            };
        case FOUND_BAD_WORD:
            console.log(FOUND_BAD_WORD);
            return state;
        case DATA_LOADED:
            return {
                articles: action.payload,
            };
        default:
            return state;
    }
};


export default rootReducer;