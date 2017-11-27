import * as types from './types'

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  }
}
export function deleteCompleted() {
  return {type: types.DELETE_COMPLETED}
}
export function toggleComplete(id) {
  return {
    type: types.TOGGLE_COMPLETE,
    id
  }
}
export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    text,
    id
  }
}
export function completeAll() {
  return {type: types.COMPLETE_ALL}
}
export function unCompleteAll() {
  return {type: types.UN_COMPLETE_ALL}
}
export function visibibilityAll() {
  return {type: types.visibilityFilters.ALL}
}
export function visibibilityCompleted() {
  return {type: types.visibilityFilters.COMPLETED}
}
export function visibibilityUncompleted() {
  return {type: types.visibilityFilters.UNCOMPLETED}
}
export function setVisibilityFilter(filter) {
  return {type: types.SET_VISIBILITY, filter}
}