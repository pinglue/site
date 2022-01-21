import {combineReducers} from 'redux'

import entitiesReducer from './entities'

const reducer = combineReducers({
    entities: entitiesReducer
});

export default reducer