import axios from 'axios'

const API_URL =
  process.env.NODE_ENV.trim() === 'production'
    ? process.env.NEXT_PUBLIC_PROD_API
    : process.env.NEXT_PUBLIC_DEV_API

const get = async (url: string) => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const response = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers,
  })

  const json = await response.json()

  if (json.errors) {
    console.error(json.errors)
  }

  return json
}

const post = async (url: string, body?: any) => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const response = await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return response
}

export { get, post }
export default get
