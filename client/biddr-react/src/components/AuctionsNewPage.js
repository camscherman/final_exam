import React, {Component} from 'react'
import NewAuctionForm from './NewAuctionForm'
import {Auctions} from '../lib/requests'

class AuctionsNewPage extends Component {
  constructor (props){
    super (props)
    this.state = {
      user_id:""
    }


  }
  componentDidMount(){
    this.setState( {user_id: this.props.user})
  }

  submit = (params) => {
    const {onSuccess= ()=>{}} = this.props
    Auctions
      .create(params)
      .then( res =>{
        debugger
        onSuccess('Auction created!')
        this.props.history.push('/')
      })
  }

  render(){
    const {user_id} = this.state
    return (
      <div className = "AuctionsNewPage">
        <NewAuctionForm onSubmit = {this.submit} user={user_id}/>
      </div>
    )
  }
}

export default AuctionsNewPage
