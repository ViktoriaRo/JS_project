import React, { Component } from 'react'

class FeedbackForm extends Component {
  state = {
    name: null,
    surname: null,
    content: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFeedback(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="name" onChange={this.handleChange} placeholder='Name...' />
          <input type="text" id="surname" onChange={this.handleChange} placeholder='Surname...' />
          <button>Submit feedback</button>
          <textarea className="materialize-textarea" id="content" onChange={this.handleChange} placeholder='Your feedback...' />
        </form>
      </div>
    )
  }
}

export default FeedbackForm