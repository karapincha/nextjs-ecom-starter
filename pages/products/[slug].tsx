import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { get } from 'utils/fetcher'

import { Badge, Button } from 'flowbite-react'

const Page: NextPage = ({ product }: any) => {
  return (
    <>
      <Head>
        <title>Product - Next E-commerce</title>
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

      <main className="container pb-[60px]">
        <div className="grid grid-cols-[1fr_2fr] w-full gap-[32px]">
          <div className="flex justify-center border w-full p-[32px]">
            <Image
              src={product.image}
              width={500}
              height={500}
              alt={product.title}
            />
          </div>

          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex">
                <Badge color="purple">{product.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold">{product.title}</h1>
            </div>
            <p>{product.description}</p>
            <p className="text-2xl font-bold text-red-500">{product.price}</p>

            <Button>Add to cart</Button>
          </div>
        </div>
      </main>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }: any) {
  const { slug } = params
  const product = await get(`/products/${slug}`)

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 1 seconds
    revalidate: 1, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const products = await get(`/products`)

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    // Get the paths we want to pre-render based on posts
    paths: products?.map(({ id }: any) => `/products/${id}`) || [],
    fallback: 'blocking',
  }
}

export default Page
