import React, {Component} from 'react'
import {Bids} from '../lib/requests'
import BidForm from './BidForm'

class BidsSection extends Component {

  constructor (props){
    super(props)
    this.state = {
      bids: {}
    }
  }

  componentDidMount(){
    Bids
    .get()
    .then(res => this.setState({bids: res}))
  }
render(){
  return (
    <div className="BidsSection">
      <BidForm />
    </div>
  )
}


}
export default BidsSection
