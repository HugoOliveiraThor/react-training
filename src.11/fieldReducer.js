const INITIAL_STATE = {value: 'Opa'}

export default function(state= INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
        return { value: action.payload }
        default:
        // Estou retornando o estado original 
        return state
    }
}