import {all}       from 'redux-saga/effects';
import articleSaga from '../../pages/sagas/articleSaga';
import commentSaga from '../../pages/sagas/commentSaga';

export default function* rootSaga () {
    yield all([
        articleSaga(),
        commentSaga()
    ]);
}