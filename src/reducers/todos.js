import * as types from '../actions/types'

export default function todos(state = [], action) {
  switch(action.type) {
    case types.DELETE_TODO: 
    return state.filter(todo => todo.id !== action.id)

    case types.ADD_TODO:
    return [
      ...state,
      {
        id: state.reduce((max, todo)=> Math.max(max, todo.id), -1) + 1,
        text: action.text,
        completed: false
      }
    ]

    case types.TOGGLE_COMPLETE:
    return state.map(todo => {
      if(todo.id === action.id)
      return Object.assign({}, todo, {completed: !todo.completed})
      else return todo
    })

    case types.DELETE_COMPLETED:
    return state.filter(todo => !todo.completed)

    case types.EDIT_TODO:
    return state.map(todo => todo.id !== action.id? todo: Object.assign({}, todo, {text: action.text}))

    case types.COMPLETE_ALL:
    return state.map(todo => Object.assign({}, todo, {completed: true}))
    case types.UN_COMPLETE_ALL:
    return state.map(todo => Object.assign({}, todo, {completed: false} ))

    default:
    return state

  }
}