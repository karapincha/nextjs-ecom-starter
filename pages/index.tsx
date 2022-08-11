import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Page: NextPage = () => {
	return (
		<>
			<Head>
				<title>Next.js E-commerce Starter Boilerplate</title>
				<meta name="description" content="Boilerplate by Karapincha Studio" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main>
				<Image
					src="/logo.png"
					width={100}
					height={100}
					alt="Next.js Ecommerce"
				/>
				<h1>Welcome to Next.js E-Commerce!</h1>
			</main>
		</>
	);
};

export default Page;
