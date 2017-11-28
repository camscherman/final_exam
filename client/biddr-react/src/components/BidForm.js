import React from 'react'
import {Col,Container,Form, FormGroup, Label, Input, Button} from 'reactstrap'

function BidForm (props){

  return (
    <div className="bidsForm">
    <Form>
      <FormGroup>
        <Label>Make a bid</Label>
        <Input type='text' name="price" />
      </FormGroup>
      <Button outline color='primary'>Submit Bid</Button>

    </Form>
  </div>
  )
}

export default BidForm
