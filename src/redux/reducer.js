import { GET_TRABAJOS, POST_TRABAJO, DELETE_TRABAJO } from './action-type.js'

export const initialState = {
    trabajos: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRABAJOS:
            return{
                ...state,
                trabajos : action.payload
            }

        case POST_TRABAJO:
            return{
                ...state,
            }
        
        case DELETE_TRABAJO:
            return{
                ...state,
            }

        default:
            return{
                ...state,
            }
    }
}

export default rootReducer