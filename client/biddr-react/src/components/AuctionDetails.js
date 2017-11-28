import React from 'react'

function AuctionDetails (props){
  const {title, details, end_time, reserve_price, bids = []} = props
  debugger
  return (
    <div className= 'AuctionDetails'>
    <p>{title}</p>
    <p>{details}</p>
    <p>{end_time}</p>
    <p>{reserve_price}</p>
    </div>
  )
}

export default AuctionDetails
