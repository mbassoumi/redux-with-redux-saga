import {takeEvery, call, put}                     from 'redux-saga/effects';
import {API_ERRORED, COMMENT_DATA_LOADED, COMMENT_DATA_REQUESTED} from '../../constants/action-types';

export default function* watchComment() {
    yield takeEvery(COMMENT_DATA_REQUESTED, commentWorker);
}

function* commentWorker() {
    try {
        const payload = yield call(getData);
        yield put({type: COMMENT_DATA_LOADED, payload});
    } catch (e) {
        yield put({type: API_ERRORED, payload: e});
    }
}

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/comments').then(response =>
        response.json()
    );
}