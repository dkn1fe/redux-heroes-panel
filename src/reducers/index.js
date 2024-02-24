
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filterLoadingStatus: 'idle',
    filters: [],
    filteredHeroes:[],
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
                filteredHeroes:state.activeFilter === 'all' ?  action.payload : action.payload.filter(item => item.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
            case 'ADD_PERSON':
                let newCreatedHeroList = [...state.heroes,action.hero]
                return {
                     ...state,
                     heroes: newCreatedHeroList,
                     filteredHeroes:state.activeFilter === 'all' ? newCreatedHeroList : newCreatedHeroList.filter(item => item.element === state.activeFilter)
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
                        const newHeroList = state.heroes.filter(item => item.id !== action.id)
                         return {
                             ...state,
                             heroes: newHeroList,
                             filteredHeroes:state.activeFilter === 'all' ? newHeroList : newHeroList.filter(item => item.element === state.activeFilter)
                         }
                      case 'FILTERED_HEROES':
                       return {
                         ...state,
                         activeFilter:action.name,
                         filteredHeroes:action.name === 'all' ? state.heroes : state.heroes.filter(item => item.element === action.name)
                       }
        default: return state
    }
}

export default reducer;