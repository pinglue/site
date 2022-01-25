import { combineReducers } from 'redux'

import docReducer from './doc'

const entities = combineReducers({
    doc: docReducer
});

export default entities;