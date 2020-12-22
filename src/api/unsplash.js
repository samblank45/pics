import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
     'Client-ID 2YcaF7QKfX6fNxRAV8L1jVPN6t2EOzW4dSdGhEXWBi8'
  }
})

