
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}
const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
            case 'ADD_PERSON':
                return {
                     ...state,
                     heroes: [...state.heroes,action.hero]

                }
                    case 'DELETE_HEROES':
                         return {
                             ...state,
                             heroes: state.heroes.filter(item => item.id !== action.id)
                         }
        default: return state
    }
}

export default heroes;