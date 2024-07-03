import React from 'react'
import { Text, Input, Reply } from '@botonic/react'

export default class ShowMains extends React.Component {
  state = {
    email: '',
    phone: '',
    submitted: false
  }

  handleInput = (type, value) => {
    this.setState({ [type]: value })
  }

  handleSubmit = () => {
    this.setState({ submitted: true })
  }

  render() {
    if (this.state.submitted) {
      return (
        <Text>We will get back to you shortly.</Text>
      )
    }

    return (
      <>
        <Text>Here is the question bank for Mains.</Text>
        <Text>Please provide your contact details:</Text>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={(event) => this.handleInput('email', event.target.value)}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          onChange={(event) => this.handleInput('phone', event.target.value)}
        />
        <Reply onClick={this.handleSubmit}>Submit</Reply>
      </>
    )
  }
}
