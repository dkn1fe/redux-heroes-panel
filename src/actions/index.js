export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const addNewHeroes = (newHero) => {
     return {
         type: 'ADD_PERSON',
         hero:newHero
     }
}
export const filtersFetchingError = () => {
      return {
        type:'FILTER_FETCHING_ERROR'
      }
}
export const filtersFetching = () => {
    return {
      type:'FILTER_FETCHING'
    }
}
export const filtersFetched  = (filters) => {
     return {
         type:'FILTER_FETCHED',
         test:filters
     }
}

export const deleteHeroes = (id) => {
     return {
         type:'DELETE_HEROES',
         id
     }
}

export const filteredHeroes = (name) => { 
      return {
         type:'FILTERED_HEROES',
         name
      }
}