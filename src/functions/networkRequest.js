import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
})
