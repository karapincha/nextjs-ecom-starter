import { get } from 'utils/fetcher'

async function getProduct(req: any, res: any) {
  const response = await get(
    `/products/${req.query.slug.replace(/(^'|'$)/g, '')}`
  )
  res.json(response)
}

export default getProduct
