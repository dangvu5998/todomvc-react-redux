import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
const reducersRoot = combineReducers({
  todos,
  visibilityFilter
})
export default reducersRoot
