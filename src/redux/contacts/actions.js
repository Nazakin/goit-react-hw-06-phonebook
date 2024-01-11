export const addContactAction = (contact) => {
    return{
       type: 'addContact', payload: contact
    }

}
export const removeContactAction = (contact) => {
    return {
        type: 'removeContact', payload: contact
    }
}