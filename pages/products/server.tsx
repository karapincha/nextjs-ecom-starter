import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { fetch } from 'utils/fetcher'

import { Badge } from 'flowbite-react'

/* Page */
const Page: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>Products - Next E-commerce</title>
        <meta name="description" content="Boilerplate by Karapincha Studio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="flex flex-col items-center py-[80px] gap-[16px]">
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Next.js Ecommerce"
            />
          </a>
        </Link>
        <h1 className="text-[32px] font-bold">Products</h1>
      </header>

      <main className="container pb-[120px]">
        <div className="grid grid-cols-4 gap-[32px]">
          {products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </main>
    </>
  )
}

/* Product Card */
const ProductCard = ({ product, ...rest }: any) => {
  return (
    <Link href={`/products/${product.id}`} {...rest}>
      <a title={product.title}>
        <div className="flex flex-col border rounded gap-[16px] bg-white group cursor-pointer">
          <div className="flex p-[16px]">
            <Badge color="purple">{product.category}</Badge>
          </div>

          <div className="flex justify-center">
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
            />
          </div>

          <div className="flex gap-[8px] p-[32px] flex-col">
            <h2 className="text-xl line-clamp-2 group-hover:text-lime-400">
              {product.title}
            </h2>
            <p className="line-clamp-3 text-sm">{product.description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export async function getServerSideProps() {
  const products = await fetch(`/products/get-products`)

  return {
    props: { products },
  }
}

export default Page
