import * as types from '../actions/types'
import todos from './todos'
describe('Test todo reducer', ()=>{
  it('test add todos',()=>{
    expect(todos([], {type: types.ADD_TODO, text:'Learn code'})).toEqual([{id:0, text: 'Learn code', completed: false}])
    let todoList = [
      {id: 2, text: 'do exercise', completed: false},
      {id:4, text: 'Learn code', completed: false},
    ]
    expect(todos(todoList, {type: types.ADD_TODO, text: 'dating with girlfriend'}))
    .toEqual([
      {id: 2, text: 'do exercise', completed: false},
      {id:4, text: 'Learn code', completed: false},
      {id: 5, text: 'dating with girlfriend', completed:false}
    ])
  })
})