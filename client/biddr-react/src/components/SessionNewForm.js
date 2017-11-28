import React from 'react'
import {Col,Container,Form, FormGroup, Label, Input, Button} from 'reactstrap'

function SessionNewForm (props){
  const {onSubmit} = props

  const handleSubmit = event =>{
    event.preventDefault()
    const {currentTarget: form} = event
    const formData = new FormData(form)
    onSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    })
  }
  return (
    <Container>
      <Col md="3" sm="0"></Col>
      <Col md="8" sm="12">
      <Form onSubmit = {handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>
        <Button outline color='primary'>Submit</Button>
        
      </Form>
    </Col>
  </Container>
  )
}

export default SessionNewForm
