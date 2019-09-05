import React, { Component,  Fragment } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'

export default class CompletedForm extends Component {
    render(){
        const data = this.props.completed()
    
        return(
            <div>
                <Message
                    icon='thumbs up'
                    header='Congratulation signup registration is complete'
                    content='please verify your email address, you should have received an email from us already'
                />
            </div>
        )
    }
}