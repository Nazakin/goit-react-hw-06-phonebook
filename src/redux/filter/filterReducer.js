const initialState = {
    filters: "",
}
export const filterReducer = (state = initialState, action) => {
    if (action.type === 'filterContacts') {
        return {
            ...state,
            filters: action.payload,
        }
    }
    return state
}