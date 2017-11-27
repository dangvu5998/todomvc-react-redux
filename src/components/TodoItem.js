import React, {Component} from 'react'
import classnames from 'classnames'
import InputTodo from './InputTodo'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
  static propTypes ={
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    editTodo: PropTypes.func.isRequired
  }
  state = {
    editing: false
  }
  handleDoubleClick() {
    this.setState({editing: true})
  }
  handleEdit(text) {
    this.setState({editing: false})
    this.props.editTodo(this.props.id, text)
  }
  render() {
    
    return(
      <li className={classnames({completed: this.props.completed, editing: this.state.editing})} key={this.props.id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} onChange={this.props.toggleComplete.bind(this, this.props.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.text}</label>
          <button className="destroy" onClick={this.props.deleteTodo.bind(this, this.props.id)}></button>
        </div>
        <InputTodo text={this.props.text} onSave={this.handleEdit.bind(this)} editing={true} />

      </li>
    )
  }
}