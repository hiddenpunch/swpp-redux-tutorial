import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../../store/actions/index';

import { Redirect } from 'react-router-dom';

import './NewTodo.css';

class NewTodo extends Component {
  state = {
    title: '',
    content: '',
    submitted: false
  }

  postTodoHandler = () => {
    //const data =
    //  { title: this.state.title, content: this.state.content }
    //alert('submitted\n' + data.title + " " + data.content);
    // this.props.history.push('/todos');
    //this.props.history.goBack();
    this.props.onStoreTodo(this.state.title, this.state.content);
  }

  render() {
    /*if (this.state.submitted) {
      redirect = <Redirect to='/todos' />
    }*/
    return (
      <div className="NewTodo">
        <h1>Add a New Todo!</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        ></input>
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        >
        </textarea>
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStoreTodo: (title, content) =>
      dispatch(actionCreators.postTodo({title: title, content: content})),
  };
};

export default connect(null, mapDispatchToProps)(NewTodo);