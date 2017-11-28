import React, {Component} from 'react'
import {Auctions} from '../lib/requests'
import AuctionsList from './AuctionsList'

import {Container, Row, Col} from 'reactstrap'

class AuctionsIndexPage extends Component {
  constructor (props){
    super(props)
    this.state = {
      auctions: []
    }
  }

  componentDidMount(){
    const auctions = Auctions.getAll().then(data =>{
      debugger
      this.setState({auctions: data})


    })
  }

  render(){
    const {auctions} = this.state

    return(

    <div className="AuctionsIndexPage">

      <Container>
        <h1>Auctions</h1>
        <Row>
          <Col md="2"></Col>
            <Col md="8">
              <AuctionsList auctions = {auctions} />
            </Col>
    </Row>
    </Container>
    </div>
  )
  }
}
export default AuctionsIndexPage
