import {
    SET_SEARCH_VALUE,
    SET_OPTIONS,
    SET_SELECTED_SHOW
} from "../actions/types"


const initialState = {
    searchValue: '',
    options: [],
    show: []
}

const searchResults = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_SEARCH_VALUE: return { ...state, searchValue: payload };

        case SET_OPTIONS: return { ...state, options: payload };

        case SET_SELECTED_SHOW: return { ...state, show: payload };

        default: return state;
    }
}

export default searchResults