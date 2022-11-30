import { put, call, takeEvery, select, takeLatest } from 'redux-saga/effects';
import { SET_SEARCH_VALUE, SET_SELECTED_SHOW_ID } from "../actions/types";
import {
    setOptions,
    setSelectedShow,
    setSelectedShowSeasons,
    setSelectedShowEpisodes,
    setSelectedShowCast
} from "../actions/index";
import { requestGetData } from '../api/api';
import { inputValue, showId } from "./selectors"



export function* loadOptions() {
    const inputValueFromState = yield select(inputValue)
    const { data } = yield call(requestGetData, `search/shows?q=${inputValueFromState}`)
    const options = data.map(item => {
        return {
            value: item.show.name,
            id: item.show.id,
            label: item.show.name
        }
    })

    yield put(setOptions(options))
}

export function* loadShow() {

    const inputValueFromState = yield select(inputValue)
    const { data } = yield call(requestGetData, `search/shows?q=${inputValueFromState}`)

    const show = data.map(item => {
        return {
            ...item.show
        }
    })
    yield put(setSelectedShow(show))
}

export function* loadShowExtraData() {

    const id = yield select(showId)

    const seasons = yield call(requestGetData, `shows/${id}/seasons`)
    const episodes = yield call(requestGetData, `shows/${id}/episodes`)
    const cast = yield call(requestGetData, `shows/${id}/cast`)

    yield put(setSelectedShowSeasons(seasons.data))
    yield put(setSelectedShowEpisodes(episodes.data))
    yield put(setSelectedShowCast(cast.data))
}



export function* watchSaga() {
    yield takeEvery(SET_SEARCH_VALUE, loadOptions)
    yield takeLatest("GET_SHOW", loadShow)
    yield takeEvery(SET_SELECTED_SHOW_ID, loadShowExtraData)
}

export default function* rootSaga() {
    yield watchSaga()
}