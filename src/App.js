import React, { Component } from 'react';
import Header from './components/Header'
import SectionMain from './components/SectionMain'
import './index.css'
import * as TodosAction from './actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Footer from './components/Footer'
class App extends Component {
  render() {
    const {todos, visibilityFilter, actions} = this.props
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={actions.addTodo}/>
          <SectionMain todos={todos} visibilityFilter={visibilityFilter} actions={actions}/>
        </section>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { todos: state.todos, visibilityFilter: state.visibilityFilter }
}
const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(TodosAction, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
