import { combineReducers, createStore } from "redux"
import { contactsReducer } from "./contacts/contactsReducer"
import { filterReducer } from "./filter/filterReducer"


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
})

export const store = createStore(rootReducer)