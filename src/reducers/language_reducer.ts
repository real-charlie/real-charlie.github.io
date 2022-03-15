import {Action, Reducer} from "redux";
import LanguageConstants from "../constants/language_constants";

const languageReducer: Reducer = (state = {}, action: Action) => {
    switch (action.type) {
        case LanguageConstants.EN:
            state = require('../languages/en.json')
            break
        case LanguageConstants.FA:
            state = require('../languages/fa.json')
            break
        case LanguageConstants.IT:
            state = require('../languages/it.json')
            break

    }
    return state
}

export default languageReducer
