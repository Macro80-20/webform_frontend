import React, { Component,  Fragment } from 'react'
import { Form,Button, Divider } from 'semantic-ui-react'




export default class privacyForm extends Component{

    state = {
        submittedUpdates: false ,
        submittedOtherupdates: false 
    }   

    submit = (event) =>  {
        // find out the value you get from a tick in checkbox and toggle false or ture based on it 
        this.setState({ submittedUpdates:event.target.otherupdates.checked, submittedOtherupdates: event.target.otherupdates.checked
        })
        this.props.nextPage(event.target.otherupdates.checked,event.target.otherupdates.checked);
      }
    render(){
        const {onChange} = this
        const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']
        return(
     <div>
      <Form onSubmit={this.submit} size="big" key="big">
        <Form.Checkbox
        name="updates"
        label="Recieve Updates about Trayio product by email"
      />
        <Form.Checkbox
        onChange={onChange}
        name="otherupdates"
        label="Recieve communication by email for other products created by other products"
      />
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
      </div>
        )}
    }