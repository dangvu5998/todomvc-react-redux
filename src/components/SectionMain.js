import React, {Component} from 'react'
import classnames from 'classnames'
import TodoItem from './TodoItem'
import {visibilityFilters} from '../actions/types'
export default class SectionMain extends Component {

  renderToggleAll(completed) {
    let checked = completed && completed === this.props.todos.length
    let actions = this.props.actions
    let toggle = checked? actions.unCompleteAll: actions.completeAll
    return (
    <div>
    <input type="checkbox" id="toggle-all" className="toggle-all" checked={checked} onClick={toggle}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    </div>
    )
  }
  footer() {
    let {todos, actions, visibilityFilter} = this.props
    return (
      <footer className="footer">
        <span class="todo-count"><strong>{todos.reduce((num, todo) => num += todo.completed? 0:1, 0)}</strong> item left</span>
        <ul class="filters">
					<li>
						<a href="#" className={(classnames({"selected": visibilityFilter === visibilityFilters.ALL}))} onClick={actions.setVisibilityFilter.bind(this, visibilityFilters.ALL)}>All</a>
					</li>
					<li>
						<a className={(classnames({"selected": visibilityFilter === visibilityFilters.UNCOMPLETED}))} onClick={actions.setVisibilityFilter.bind(this, visibilityFilters.UNCOMPLETED)} href="#">Active</a>
					</li>
					<li>
						<a href="#" className={(classnames({"selected": visibilityFilter === visibilityFilters.COMPLETED}))} onClick={actions.setVisibilityFilter.bind(this, visibilityFilters.COMPLETED)}>Completed</a>
					</li>
				</ul>
        <button class="clear-completed" onClick={actions.deleteCompleted.bind(this)}>Clear completed</button>
      </footer>
    )
  }
  render() {
    const {todos, visibilityFilter, actions} = this.props

    let completed = todos.reduce((num, todo) => num += todo.completed? 1:0, 0)
    return(
      <section className="main">
        {this.renderToggleAll(completed)}
        <ul className="todo-list">
          {todos.filter(todo =>{
            switch(visibilityFilter) {
              case visibilityFilters.COMPLETED:
              return todo.completed
              case visibilityFilters.UNCOMPLETED:
              return !todo.completed
              default:
              return true
            }
          }).map(todo => <TodoItem {...actions} {...todo} key={todo.id}/>)}
        </ul>
        {this.footer()}
      </section>
    )
  }
}