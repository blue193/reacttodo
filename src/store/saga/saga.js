import { call, put, takeLatest } from "redux-saga"
import { sendLoadRequest } from './api'
import { LOAD_TODOS } from "../actions";

import { 
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from "../actions/index"

function* loadTodos(action) {
    try {
        const todos = yield call(sendLoadRequest)
        yield put({type: LOAD_TODOS_SUCCESS, todos})
    } catch(err) {
        yield put({type: LOAD_TODOS_FAILURE, err})
    }
}

function* todoSaga() {
    yield takeLatest(LOAD_TODOS, loadTodos)
}

export default todoSaga