import React, {Component} from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<p>Created by <a href="https://github.com/dangvu5998">Tri Vu</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
    )
  }
}