import axios from 'axios'

const API_URL =
  process.env.NODE_ENV.trim() === 'production'
    ? process.env.NEXT_PUBLIC_PROD_API
    : process.env.NEXT_PUBLIC_DEV_API

const get = async (url: string, body?: any) => {
  const response = await axios.get(`${API_URL}${url}`, {
    params: body,
  })
  return response.data
}

const post = async (url: string, body?: any) => {
  const response = await axios.post(`${API_URL}${url}`, body)
  return response.data
}

const fetch = async (url: string, body?: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_API}/${url}`,
    {
      params: body,
    }
  )
  return response.data
}

const fetchPost = async (url: string, body?: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_API}/${url}`,
    body
  )
  return response.data
}

export { get, post, fetch, fetchPost }
export default get
