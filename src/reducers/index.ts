import {combineReducers} from "redux";
import languageReducer from "./language_reducer";

const combined = combineReducers({
    content: languageReducer
})

export default combined
