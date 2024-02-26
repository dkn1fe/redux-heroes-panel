
const initialState = {
    filterLoadingStatus: 'idle',
    filters: [],
    activeFilter:'all',
}
const filters = (state = initialState, action) => {
    switch (action.type) {
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
                      case 'FILTERED_HEROES':
                       return {
                         ...state,
                         activeFilter:action.name,
                       }
        default: return state
    }
}

export default reducer;