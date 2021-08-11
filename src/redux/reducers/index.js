import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favorites: [...state.companies.favorites, action.payload]
                }
            }

        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favorites: state.companies.favorites.filter((f, i) => i !== action.payload)
                }
            }
        
        default:
            return state
    }
}

export default mainReducer