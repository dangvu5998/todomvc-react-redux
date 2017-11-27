import React, {Component} from 'react'
import InputTodo from './InputTodo'
export default class Header extends Component {
  onSave(text) {
    this.props.addTodo(text)
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <InputTodo onSave={this.onSave.bind(this)} newTodo placeholder="What needs to be done?"/>
      </header>
    )
  }
}