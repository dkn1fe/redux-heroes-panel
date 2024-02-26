import { legacy_createStore as  createStore,combineReducers } from 'redux';
import reducer from '../reducers';
import heroes from '../reducer/heroes'
import filter from '../reducer/filter'

const store = createStore(combineReducers({heroes,filter}),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;