import React from 'react';
import axios from 'axios';

export default class MyForm extends React.Component {

  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state={
    email: '',
    password: ''}

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`https://reqres.in/api/register`,{
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleChange = event => {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}