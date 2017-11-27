import {SET_VISIBILITY,  visibilityFilters} from '../actions/types'

export default function visibilityFilter(state = visibilityFilters.ALL, action) {
  if(action.type === SET_VISIBILITY)
  return action.filter
  else
  return state
}