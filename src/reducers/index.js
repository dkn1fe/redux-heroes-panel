
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filterLoadingStatus: 'idle',
    filters: [],
    activeFilter:'all',
}
const reducer = (state = initialState, action) => {
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
                case 'FILTER_FETCHING':
                    return {
                        ...state,
                        filterLoadingStatus: 'loading'
                    }
                case 'FILTER_FETCHED':
                    return {
                         ...state,
                        filters:action.test,
                        filterLoadingStatus:'idle'
                    }
                case 'FILTER_FETCHING_ERROR':
                    return {
                        ...state,
                        filterLoadingStatus: 'error'
                    }
                    case 'DELETE_HEROES':
                         return {
                             ...state,
                             heroes: state.heroes.filter(item => item.id !== action.id)
                         }
                      case 'FILTERED_HEROES':
                       return {
                         ...state,
                         activeFilter:action.name,
                       }
        default: return state
    }
}

export default reducer;