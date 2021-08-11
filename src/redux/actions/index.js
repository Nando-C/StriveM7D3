export const addToFavoritesAction = (company) => ({
    type: 'ADD_TO_FAVORITES',
    payload: company,
})

export const removeFromFavoritesAction = (index) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: index,
})