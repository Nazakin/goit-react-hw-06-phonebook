const initialState = {
    contacts: [],
}

export const contactsReducer = (state = initialState, action) => {
    if (action.type === 'addContact') {
        return{
            ...state,
            contacts: [...state.contacts, action.payload]
        }
    } else if (action.type === 'removeContact') {
        return{
            ...state,
            contacts :state.contacts.filter((el) => el.id !== action.payload)

        }
    }
    return state
}