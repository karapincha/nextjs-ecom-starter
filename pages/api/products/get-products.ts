import React from 'react'
import { get } from 'utils/fetcher'

async function getProducts(req: any, res: any) {
  const response = await get('/products')
  res.json(response)
}

export default getProducts
