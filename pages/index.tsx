import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'flowbite-react'

const Page: NextPage = () => (
  <>
    <Head>
      <title>Next.js E-commerce Starter Boilerplate</title>
      <meta name="description" content="Boilerplate by Karapincha Studio" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main className="flex flex-col items-center gap-[32px] pt-[33vh] justify-center">
      <Image src="/logo.svg" width={100} height={100} alt="Next.js Ecommerce" />

      <h1 className="text-3xl font-bold underline">
        Welcome to Next.js E-Commerce!
      </h1>

      <p>Powered by Karapincha Studio</p>

      <div className="flex gap-[16px]">
        <Link href="/products">
          <a title="Browse Products">
            <Button>Browse Products (Build time)</Button>
          </a>
        </Link>

        <Link href="/products/client">
          <a title="Browse Products">
            <Button>Browse Products (Client side)</Button>
          </a>
        </Link>

        <Link href="/products/server">
          <a title="Browse Products">
            <Button>Browse Products (Server side)</Button>
          </a>
        </Link>
      </div>
    </main>
  </>
)

export default Page
