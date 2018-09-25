import { call, put, takeLatest } from "redux-saga/effects"
import { sendLoadRequest } from './api'

import { 
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from "../actions"

function* loadTodos(action) {
    try {
        const res = yield call(sendLoadRequest)
        yield put({type: LOAD_TODOS_SUCCESS, todos: res.todos })
    } catch(err) {
        yield put({type: LOAD_TODOS_FAILURE, err})
    }
}

function* todoSaga() {
    yield takeLatest(LOAD_TODOS, loadTodos)
}

export default todoSaga