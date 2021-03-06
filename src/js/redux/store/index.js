import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer                             from '../reducers/index';
import {forbiddenWordsMiddleware}              from '../middlewares/forbiddenWordsMiddleware';
import createSagaMiddleware                    from 'redux-saga';
import apiSaga                                 from '../sagas/index';


const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
    )
);

initialiseSagaMiddleware.run(apiSaga)

export default store;