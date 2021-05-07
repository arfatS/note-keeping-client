import { call, put, takeLatest } from "redux-saga/effects";

import {
    getMyNotesListApi, getNoteDetailApi,
    getUsersListApi, getSharedNotesListApi,
    getSharedUsersListApi
} from './api'

export function* registerSaga() {
    yield takeLatest("MY_NOTES_LIST_SAGA", getMyNotesListSaga);
    yield takeLatest("NOTE_DETAIL_SAGA", getNoteDetailSaga);
    yield takeLatest("USERS_LIST_SAGA", getUsersListSaga);
    yield takeLatest("SHARED_NOTES_LIST_SAGA", getSharedNotesListSaga);
    yield takeLatest("SHARED_USERS_LIST_SAGA", getSharedUsersListSaga);
}


export function* getUsersListSaga(action) {
    try{
        const data = yield call(getUsersListApi);
        yield put({ type: "USERS_LIST_DATA", payload: { data } });
    }catch(e){

    }
}

export function* getMyNotesListSaga(action) {
    const { userId } = action.payload;
    try{
        const data = yield call(getMyNotesListApi, { userId });
        yield put({ type: "MY_NOTES_LIST_DATA", payload: { data } });
    }catch(e){

    }
}

export function* getSharedNotesListSaga(action) {
    const { userId } = action.payload;
    try{
        const data = yield call(getSharedNotesListApi, { userId });
        yield put({ type: "SHARED_NOTES_LIST_DATA", payload: { data } });
    }catch(e){

    }
}

export function* getNoteDetailSaga(action) {
    const { noteId } = action.payload;
    try{
        const data = yield call(getNoteDetailApi, { noteId });
        yield put({ type: "NOTE_DETAIL_DATA", payload: { data } });
    }catch(e){

    }
}

export function* getSharedUsersListSaga(action) {
    const { noteId } = action.payload;
    try{
        const data = yield call(getSharedUsersListApi, { noteId });
        yield put({ type: "SHARED_USERS_LIST_DATA", payload: { data } });
    }catch(e){

    }
}
