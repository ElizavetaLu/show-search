import {
    SET_SELECTED_SHOW_ID,
    SET_SELECTED_SHOW_SEASONS,
    SET_SELECTED_SHOW_EPISODES,
    SET_SELECTED_SHOW_CAST,
} from "../actions/types"


const initialState = {
    showId: null,
    seasons: [],
    episodes: [],
    cast: []
};

const selectedShow = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_SELECTED_SHOW_ID: return { ...state, showId: payload };

        case SET_SELECTED_SHOW_SEASONS: return { ...state, seasons: payload };

        case SET_SELECTED_SHOW_EPISODES: return { ...state, episodes: payload };

        case SET_SELECTED_SHOW_CAST: return { ...state, cast: payload };

        default: return state;
    }
}

export default selectedShow