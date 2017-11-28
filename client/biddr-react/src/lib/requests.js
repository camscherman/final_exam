const BASE_URL = "http://localhost:3000"

function getJwt () {
  return localStorage.getItem('jwt')
}

export const Token = {
  create (params){
    return fetch(`${BASE_URL}/api/v1/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(params)
    }).then(res=>{
      if(res.status === 200){
        return res.json()
      } else {
        return {error: "Something went wrong"}
      }
    })
  }
}

export const Auctions = {
  getAll() {
    return fetch(`${BASE_URL}/api/v1/auctions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())

  },
  getItem(id){
    return fetch(`${BASE_URL}/api/v1/auctions/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    }).then( res=> res.json())
  },
  create(params){
    return fetch(`${BASE_URL}/api/v1/auctions/`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${getJwt()}`
      },
      body: JSON.stringify(params)
    }).then( res=> {
      if(res.status === 200){
        
        return res.json()
      } else {
        return {error: 'Something went wrong'}
      }
    })
  }

}

export const Bids = {
  get(id) {
    return fetch(`${BASE_URL}/api/v1/auctions/${id}/bids`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => res.json())
  }
}
