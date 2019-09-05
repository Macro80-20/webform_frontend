import React, { Component,  Fragment } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Steps from './components/steps'
import RegisterForm from './components/registerform'
import PrivacyForm from './components/privacy'
import CompletedForm from './components/completedForm'
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
class App extends Component {

  state ={
    step1: false,
    step2: false,
    // user: {
    //   name: "",
    //   role: "",
    //   password: "",
    //   email: "",
    //   updates: false,
    //   otherUpdates: false,
    // },
  }
  privacyPage = (name,role,password,email) => {
    this.setState({
     step1: !this.state.step1,
     submittedname: name,
     submittedRole: role,
     submittedPassword: password,
     submittedEmail: email,
  })
  this.props.history.push('/privacy')
    }
    

  lastPage = (updates,otherUpdates) =>{  
    this.setState({
      step2: !this.state.step2,
      updates: updates,
      otherUpdates: otherUpdates,})
    this.props.history.push('/completed')
  }
  
  completed = () => {
   const { submittedName, submittedRole, submittedPassword,submittedEmail,updates,otherUpdates}=this.state 
  console.log(submittedName, submittedRole, submittedPassword,submittedEmail,updates,otherUpdates)
  }

  render(){
    const {privacyPage, lastPage } = this
    const { step1, step2 } = this.state
   
  
    return(
      <div>
      <Switch>
        <Route exact path="/" render={ props => (
          <Redirect to="/user"/>)
          }/>
        <Route
            path='/user'
            render={props => (
              <div>
                <RegisterForm {...this.props} nextPage={privacyPage}/>  
                <Steps step1={step1}/>
              </div>)
                    }/>
        <Route
            path='/privacy'
            render={props => (
            <div>  
              <PrivacyForm nextPage={lastPage}/>   
              <Steps step1={step1} step2={step2}/>
            </div>)
                    }/>
        <Route
            path='/completed'
            render={props => (
            <div>  
              <CompletedForm completed={this.completed}/>   
              <Steps step1={step1} step2={step2}/>
            </div>)
                    }/>
  
        </Switch>
    </div>
    )
  }
}
export default withRouter(App)
