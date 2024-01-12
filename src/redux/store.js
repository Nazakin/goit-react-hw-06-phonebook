import { combineReducers } from "redux"
import { contactsReducer } from "./contacts/contactsReducer"
import { filterReducer } from "./filter/filterReducer"
import { configureStore } from "@reduxjs/toolkit"


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
})

export const store = configureStore({reducer: rootReducer,})