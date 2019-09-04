import React, { Component,  Fragment } from 'react'
import { Form,Button, Divider } from 'semantic-ui-react'




export default class privacyForm extends Component{

    render(){
        const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']
        return(
     <div>
      <Form onSubmit={this.props.submit} size="big" key="big">
        <Form.Checkbox
        label="Recieve Updates about Trayio product by email"
      />
        <Form.Checkbox
        label="Recieve communication by email for other products created by other products"
      />
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
      </div>
        )}
    }