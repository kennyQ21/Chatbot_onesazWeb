import React from 'react'
import { Text, Reply } from '@botonic/react'

export default class Welcome extends React.Component {
  render() {
    return (
      <>
        <Text>Welcome! How can I help you today?</Text>
        <Text>
          Please select what your question is about:
          <Reply payload='Results'>Results</Reply>
          <Reply payload='QuestionBank'>QuestionBank</Reply>
          <Reply payload='other'>Other</Reply>
        </Text>
      </>
    )
  }
}