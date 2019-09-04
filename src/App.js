import React, { Component,  Fragment } from 'react'

import Steps from './components/steps'
import RegisterForm from './components/registerform'
import PrivacyForm from './components/privacy'
import './App.css'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'
export default class App extends Component {

  state ={
    Passed: false
    // user: {
    //   name: "",
    //   role: "",
    //   password: "",
    //   email: "",
    //   updates: false,
    //   otherUpdates: false,
    // },
  }
  nextPage = () =>{
  //  const {name,role,password,email} = this.state.user
    this.setState({Passed: true})
    }

  submit = (event) =>  
  // find out the value you get from a tick in checkbox and toggle false or ture based on it 
  this.setState({ [event.target.name]: event.target.value })
  
  render(){
  
    return(
      <div>
        {!this.state.Passed
        ?<RegisterForm nextPage={this.nextPage}/>
        :<PrivacyForm submit={this.submit}/>
        }
      <Steps/>
        
    </div>
    )
  }
}

