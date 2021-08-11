import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: [...state.companies.favourites, action.payload]
                }
            }

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: state.companies.favourites.filter((f, i) => i !== action.payload)
                }
            }
        
        default:
            return state
    }
}

export default mainReducer