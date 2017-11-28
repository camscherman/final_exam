import React, {Component} from 'react'
import AuctionDetails from './AuctionDetails'
import {Auctions} from '../lib/requests'
import BidsSection from './BidsSection'

class AuctionShowPage extends Component {

  constructor (props){
    super (props)
    this.state = {
      auction: {}
    }
  }
  componentDidMount(){
    const {params} = this.props.match
    Auctions
      .getItem(params.id)
      .then(auction =>{
        this.setState({auction})
      })
  }

  render(){
    return (
      <div className="AuctionsShowPage">
        <AuctionDetails {...this.state.auction} />
        <BidsSection />
    </div>
    )
  }


}

export default AuctionShowPage
