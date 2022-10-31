import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useMemo } from "react";

import PlausibleProvider from "next-plausible";

import Logo from "../components/Logo";
import RunwayCalculator from "../components/RunwayCalculator/RunwayCalculator";
import SummitLogo from "../components/SummitLogo";

const Home: NextPage<{ survived: boolean }> = ({ survived }) => {
  useEffect(() => {
    Router.replace("/", undefined, { shallow: true });
  }, []);

  const sharingImage = useMemo(() => {
    if (survived) {
      return "https://escapethedead.com/og-share-survive.png";
    }

    return "https://escapethedead.com/og-share.png";
  }, [survived]);

  return (
    <PlausibleProvider domain="escapethedead.com">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 pt-16 pb-24 bg-zinc-800 text-zinc-50">
        <Head>
          <title>Escape the Dead</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="The startups of the graveyard have awakened … and they're hungry for your company."
          />
          <meta property="og:title" content="Escape the Dead" key="og:title" />
          <meta property="og:image" content={sharingImage} key="og:image" />
          <meta
            property="og:description"
            content="The startups of the graveyard have awakened … and they're hungry for your company."
            key="og:description"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Escape the Dead"
            key="twitter:title"
          />
          <meta
            name="twitter:description"
            content="The startups of the graveyard have awakened … and they're hungry for your company."
            key="twitter:description"
          />
          <meta
            name="twitter:image"
            content={sharingImage}
            key="twitter:image"
          />
        </Head>

        <header className="mb-16 md:mb-24 text-center w-64 md:max-w-xs xl:max-w-xl md:w-full">
          <Logo className="w-full max-w-md mx-auto" />
        </header>

        <div className="mb-16 md:mb-24 space-y-4 text-center md:text-xl font-medium md:max-w-xl lg:max-w-3xl">
          <p>
            Raised by the insatiable thirst of the vampire capitalists, the
            startup graveyard and its ill-fated members have been resurrected
            once again.
          </p>
          <p>
            Not-so-freshly awakened from their slumber, they&rsquo;re hungry for
            your company …
          </p>
          <p>
            Will you escape their unrelenting march? Or will you merely postpone
            your fate? Perhaps you&rsquo;ve already been bitten? Unleash the
            power of simulation to discover your path of recovery and escape …
            if you can!
          </p>
        </div>

        <RunwayCalculator />
      </div>
      <div
        className="p-4 md:p-8 text-center bg-zinc-600 text-zinc-200 relative"
        id="whats-this"
      >
        <div className="max-w-xl text-center mx-auto space-y-3 text-sm md:text-base">
          <h3 className="font-bold text-zinc-100 md:text-lg absolute -top-10 md:-top-12 left-0 right-0 text-center">
            <a href="#whats-this" className="no-underline hover:underline">
              What&rsquo;s this?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-4 ml-2.5 inline-flex fill-current"
              >
                <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z" />
              </svg>
            </a>
          </h3>
          <p>
            This mini-tool is powered by a runway calculator running on{" "}
            <a
              href="https://usesummit.com"
              className="underline font-medium hover:no-underline"
            >
              Summit
            </a>
            .
          </p>
          <p>
            Summit is a low-code platform to supercharge your marketing and
            sales efforts with the power of simulation.
          </p>
          <p>
            This mini-tool is available as a free{" "}
            <a
              href="https://github.com/usesummit/nextjs-example-escape-the-dead"
              className="underline font-medium hover:no-underline"
            >
              Next.js starter template
            </a>
            .
          </p>
        </div>

        <div className="mt-8 mb-4 md:mt-16 md:mb-8 flex items-center justify-center">
          <a href="https://usesummit.com">
            <SummitLogo />
          </a>
        </div>
      </div>
    </PlausibleProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      survived: query.s === "1",
    },
  };
};
