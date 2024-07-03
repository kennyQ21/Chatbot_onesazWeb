import React from 'react'
import { Text, Reply } from '@botonic/react'

export default class ShowQuestionBankOptions extends React.Component {
  render() {
    return (
      <>
        <Text>Select the standard you want to see the question bank for:</Text>
        <Reply payload='Mains'>Mains</Reply>
        <Reply payload='Advance'>Advance</Reply>
        <Reply payload='Eamcet'>Eamcet</Reply>
      </>
    )
  }
}
