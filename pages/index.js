import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Banner from "../components/Header/Banner";
import SmallCard from "../components/SmallCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData }) {
	return (
		<>
			<Head>
				<title>airbnb</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main className="mx-auto px-8 sm:px-16 max-w-7xl">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
				</section>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{exploreData.map((item) => {
						<SmallCard item={item} key={item.img} />;
					})}
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://links.papareact.com/pyp");
	const exploreData = await res.json();
	return {
		props: {
			exploreData,
		},
	};
}
