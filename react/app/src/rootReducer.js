import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import entities from './reducers/entities'
import errorMessage from './reducers/errorMessage'
import { pagination } from './reducers/pagination'
import postsByReddit from './reducers/postsByReddit'
import selectedReddit from './reducers/selectedReddit'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

export const rootReducer = combineReducers({
  entities,
  errorMessage,
  pagination,
  postsByReddit,
  routing: routerReducer,
  selectedReddit,
  todos,
  visibilityFilter,
})
