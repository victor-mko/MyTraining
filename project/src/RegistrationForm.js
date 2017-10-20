import React, {Component} from 'react';


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handlerEmailChange = this.handlerEmailChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    event.preventDefault();
    console.log('form is submitted. Email value is', this.state.email);
  }


  handlerEmailChange(event) {
    console.log('email is changed', event.target.value);
    this.setState({email: event.target.value});
  }

  render () {
    return (
      <form onSubmit={this.handlerSubmit}>
        <input 
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.handlerEmailChange}
        />
      </form>
    )
  }
}



export default RegistrationForm;