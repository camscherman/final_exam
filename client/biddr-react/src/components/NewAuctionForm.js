import React from 'react'
import {Col,Container,Form,Row, FormGroup, Label, Input, Button,Card} from 'reactstrap'

function NewAuctionForm (props){
  const {onSubmit = ()=>{}} = props
  const {user} = props

  const handleSubmit = (event) =>{
    const {currentTarget: form} = event
    const formData = new FormData(form)

    

    onSubmit({
      title: formData.get('title'),
      details: formData.get('details'),
      end_time: formData.get('end_time'),
      reserve_price: formData.get('reserve_price'),


    })
  }
  return(

    <div className='AuctionForm'>
      <Row>
        <Col md="3"></Col>
        <Col md="6">

      <Card>
      <Form onSubmit = {handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type='title' name='title'></Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="details" id="exampleText" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input type="date" name="end_time" id="exampleDatetime" placeholder="datetime placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="title">Reserve price</Label>
          <Input type='text' name= 'reserve_price'></Input>
        </FormGroup>
        <Button outline color="primary">Submit Auction</Button>




      </Form>
    </Card>
  </Col>
  </Row>
    </div>
  )
}

export default NewAuctionForm
