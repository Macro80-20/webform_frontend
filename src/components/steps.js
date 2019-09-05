import React from 'react'
import { Step } from 'semantic-ui-react'

const Steps= (props) => (
  <Step.Group ordered>
    <Step active={true} completed={props.step1}>
      <Step.Content>
        <Step.Title>User</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step active={true} completed={props.step2} >
      <Step.Content>
        <Step.Title>Privacy</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>
    <Step active >
      <Step.Content>
        <Step.Title>Done</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Steps
