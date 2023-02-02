import { combineReducers } from "redux";
import searchResults from "./searchResults";
import selectedShow from "./selectedShow";


const reducers = combineReducers({
    searchResults,
    selectedShow
})


export default reducers