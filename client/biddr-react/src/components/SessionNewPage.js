import React, {Component} from 'react'
// import {Col,Container,Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {Token} from '../lib/requests'
import SessionNewForm from './SessionNewForm'

class SessionNewPage extends Component {
  constructor (props){
    super(props)
  }
  submitSession = (params) =>{
    const {onSubmit = ()=>{}} = this.props
    const {onSuccess= ()=>{}} =this.props
    Token
      .create(params)
      .then((data) => {
        
        const {jwt} = data
        localStorage.setItem('jwt', jwt)
        onSubmit()
        onSuccess("You are signed in.")
        this.props.history.push('/')
      })
  }
  render(){
    return (
      <div className="SessionNewPage">
        <SessionNewForm onSubmit = {this.submitSession}/>
      </div>

    )
  }
}

export default SessionNewPage
