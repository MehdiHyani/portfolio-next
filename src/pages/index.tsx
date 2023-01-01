import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { trpc } from "../utils/trpc";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { formatFullName } from "../utils/helpers";
import Skills from "../components/Skills";

const Home: NextPage = () => {
    const { data: portfolio, isLoading, error } =
        trpc.portfolio.getPortfolio.useQuery(undefined, { refetchOnWindowFocus: false, refetchOnMount: false });

    if (isLoading)
        return <div>Loading</div>; // Add a spinner

    if (!portfolio || error)
        return <div>Error</div>;

    const title = `${formatFullName(portfolio.about.firstName, portfolio.about.lastName)}'s Portfolio`


    return (
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={portfolio.about.bio} />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mehdihyani.me" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={portfolio.about.bio} />
                <meta property="og:image" content="/preview.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://mehdihyani.me" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={portfolio.about.bio} />
                <meta property="twitter:image" content="/preview.png" />
            </Head>
            <main>
                <Navbar />
                <Hero />
                <Skills />
                <Footer />
            </main>
        </>
    );
};

export default Home;
