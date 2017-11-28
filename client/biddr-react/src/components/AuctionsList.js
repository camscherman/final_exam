import React from 'react'
import {Link} from 'react-router-dom'
import AuctionSummary from './AuctionSummary'

function AuctionsList (props) {

  const {auctions =[]} = props

  return (
    <div className="AuctionsList">
    {


      auctions.map(auction=>(
        <AuctionSummary key={auction.id} {...auction}/>

      ))
    }
  </div>
  )
}

export default AuctionsList
