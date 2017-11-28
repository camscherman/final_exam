import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'
import AuthRoute from './AuthRoute'
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch
 } from 'react-router-dom';

import {Container,Alert, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'

//Pages
import AuctionsNewPage from './AuctionsNewPage'
import AuctionsIndexPage from './AuctionsIndexPage'
import SessionNewPage from './SessionNewPage'
import AuctionShowPage from './AuctionShowPage'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      isOpen: false,
      user: {},
      alert: ""
    }
    this.isSignedIn = this.isSignedIn.bind(this)

  }

  toggle = () =>{
    this.setState({isOpen: !this.state.isOpen})
  }

  componentDidMount (){
    this.signIn()
  }

  signIn = ()=> {
     const jwt = localStorage.getItem('jwt');
     if (jwt) {
       const payload = jwtDecode(jwt)
       this.setState({user: payload})
     }
   }

   getUserId= ()=>{
     return this.state.user.id
   }

   flashMessage = (message)=>{
     this.setState({alert: message})
     setTimeout(()=>{
       this.setState({alert: ""})
     }, 3000)
   }

   isSignedIn() {

     if(!!this.state.user.id){
       return true
     } else {
       return false
     }
   }

  render() {
    return (
      <Router>
          <div className="App">
          <div>
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">BIDDR</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/auctions">Show All Auctions</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/auctions/new">Create an Auction</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/sign_in">Sign In</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <Container className ="AppBody">
            {this.state.alert.length > 0 && <Alert color="success">{this.state.alert}</Alert>}
          <Switch>
          <AuthRoute isAuthenticated = {this.isSignedIn()} path='/auctions/new' component= {AuctionsNewPage} />
          <Route path='/auctions/:id' component = {AuctionShowPage} />
          <Route path='/auctions' component = {AuctionsIndexPage}/>
          <Route path='/sign_in'
                render = {props => <SessionNewPage {...props} onSignIn = {this.signIn} onSuccess = {this.flashMessage}/>  }
              />
          <Route path='/auctions/new'
                render = {props => <AuctionsNewPage {...props}  onSuccess = {this.flashMessage} user= {this.getUserId()}/>  }
              />
        </Switch>

      </Container>
          </div>
    </Router>
    );
  }
}

export default App;
