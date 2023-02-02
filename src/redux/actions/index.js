import {
    SET_SEARCH_VALUE,
    SET_OPTIONS,
    SET_SELECTED_SHOW,
    SET_SELECTED_SHOW_ID,
    SET_SELECTED_SHOW_SEASONS,
    SET_SELECTED_SHOW_EPISODES,
    SET_SELECTED_SHOW_CAST
} from "./types";


export const setSearchValue = value => ({
    type: SET_SEARCH_VALUE,
    payload: value
})

export const setOptions = option => ({
    type: SET_OPTIONS,
    payload: option
})
export const setSelectedShow = show => ({
    type: SET_SELECTED_SHOW,
    payload: show
})



export const setSelectedShowId = id => ({
    type: SET_SELECTED_SHOW_ID,
    payload: id
})
export const setSelectedShowSeasons = seasons => ({
    type: SET_SELECTED_SHOW_SEASONS,
    payload: seasons
})
export const setSelectedShowEpisodes = episodes => ({
    type: SET_SELECTED_SHOW_EPISODES,
    payload: episodes
})
export const setSelectedShowCast = cast => ({
    type: SET_SELECTED_SHOW_CAST,
    payload: cast
})

