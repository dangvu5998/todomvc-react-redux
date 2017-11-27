import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
export default class InputTodo extends Component {
  
  static propTypes = {
    placeholder: PropTypes.string,
    newTodo: PropTypes.bool,
    onSave: PropTypes.func.isRequired
  }
  state = {
    text: this.props.text || ''
  }
  onChange(e) {
    this.setState({text: e.target.value})
  }
  onSubmit(e) {
    if(e.keyCode === 13) {
      let text = e.target.value.toString().trim()
      if(text)
      this.props.onSave(text)
      if(this.props.newTodo)
      this.setState({text: ''})
    }
  }
  handleBlur(e) {
    if(!this.props.newTodo)
    this.props.onSave(e.target.value)
  }
  render() {
    return <input value={this.state.text} placeholder={this.props.placeholder} className={classnames({'new-todo': this.props.newTodo, 'edit': this.props.editing})} autoFocus='true' onChange={this.onChange.bind(this)} onKeyUp={this.onSubmit.bind(this)}/>
  }
}