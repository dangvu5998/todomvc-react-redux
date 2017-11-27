import * as types from './types'
import * as actions from './actions'

describe('todos actions', () => {
  it('test addTodo', () =>{
    expect(actions.addTodo('Learn Redux and React')).toEqual({
      type: types.ADD_TODO,
      text: 'Learn Redux and React'
    })
  })
  it('test delete todo', ()=>{
    
    expect(actions.deleteTodo(3)).toEqual({
      type: types.DELETE_TODO,
      id: 3
    })
 
  })
})