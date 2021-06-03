import { createStore, combineReducers } from 'redux'

import reducers from '~/utils/merge-reducers'

const store = createStore(combineReducers({ ...reducers }))

export default store
