import Head from "next/head";
import { useMemo } from "react";

export default function Dead({
  runway,
  runwayUrl,
  tweetUrl,
}: {
  runway: number;
  runwayUrl: string;
  tweetUrl: string;
}) {
  const [title, subtitle] = useMemo(() => {
    if (runway === 0) {
      return [
        "We're so happy to have you",
        "Your capture is imminent and the startup zombies are so very hungry. Though your death is upon you, we promise: your memories of this will last forever.",
      ];
    }

    if (runway === 1) {
      return [
        "Mmm… You're the treat",
        <>
          It appears it&rsquo;s your last month among the living. Unless you
          make serious changes, the undead will be having … an old friend for
          dinner. But they really do appreciate your company.
        </>,
      ];
    }

    return [
      "Why run? Do you really have other plans?",
      <>
        Our fateful meeting appears inevitable, but we&rsquo;d rather not wait{" "}
        <strong>{runway} months</strong> for you to join us. Could you try
        again, and this time … perhaps hurry up?
      </>,
    ];
  }, [runway]);

  return (
    <>
      <Head>
        <title>We don&rsquo;t fear death. | Escape the Dead</title>
        <meta
          property="og:title"
          content="We don&rsquo;t fear death. | Escape the Dead"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Our fate may seem inevitable, but we will find a way"
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="We don&rsquo;t fear death. | Escape the Dead"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="Our fate may seem inevitable, but we will find a way"
          key="twitter:description"
        />
      </Head>
      <div className="bg-rose-400 py-8 px-2 sm:px-4 md:px-8  rounded-lg space-y-8 w-full max-w-3xl flex flex-col items-center text-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-current h-10 md:h-12"
          >
            <path d="M50.8 452.1L19.2 477.4c-2.1 1.7-4.7 2.6-7.4 2.6C5.3 480 0 474.7 0 468.2V192C0 86 86 0 192 0S384 86 384 192V468.2c0 6.5-5.3 11.8-11.8 11.8c-2.7 0-5.3-.9-7.4-2.6l-31.6-25.3c-3.3-2.7-7.5-4.1-11.8-4.1c-5.9 0-11.5 2.8-15 7.5l-37.6 50.1c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4l-38.4-51.2c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-38.4 51.2c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L77.6 455.5c-3.6-4.7-9.1-7.5-15-7.5c-4.3 0-8.4 1.5-11.7 4.1zM160 192c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
          </svg>

          <h2 className="uppercase font-bold tracking-wider text-xl md:text-2xl">
            {title}
          </h2>
        </div>

        <p className="max-w-lg mx-auto text-center md:text-lg">{subtitle}</p>

        <div className="flex justify-center gap-3 flex-col md:flex-row w-full items-center">
          <a
            href={runwayUrl}
            className="text-rose-400 bg-white px-3 py-3 inline-flex rounded font-medium items-center text-sm md:text-base"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 md:h-6 mr-2"
            >
              <path
                d="M7.36327 17.6766C7.38887 17.4985 7.38438 17.3238 7.35386 17.1572H14.7404L9.65063 23.3738C8.59551 24.6625 6.48887 23.7605 6.7245 22.121L7.36327 17.6766Z"
                fill="#FC6142"
              />
              <path
                d="M18.8579 8.18256H4.44685L0.370084 13.1619C-0.503267 14.2286 0.2671 15.8169 1.65783 15.8169H4.16717H15.848L19.9259 10.824C20.7521 9.81491 20.1073 8.33904 18.8579 8.18256Z"
                fill="#FFD848"
              />
              <path
                d="M5.55383 6.83033H12.9417C12.911 6.66327 12.9064 6.48814 12.9321 6.30954L13.5709 1.8652C13.8065 0.225644 11.6999 -0.676367 10.6448 0.612324L5.55383 6.83033Z"
                fill="#00C5D9"
              />
            </svg>

            <span>Get your detailed runway forecast</span>
          </a>

          <a
            href={tweetUrl}
            target="_blank"
            className="text-cyan-400 bg-white px-3 py-3 inline-flex rounded font-medium text-sm md:text-base items-center"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-5 mr-2"
            >
              <path
                d="M21.533 5.11169C21.5482 5.32488 21.5482 5.53811 21.5482 5.7513C21.5482 12.2538 16.599 19.7462 7.5533 19.7462C4.76648 19.7462 2.17767 18.9391 0 17.5381C0.395953 17.5838 0.776625 17.599 1.18781 17.599C3.48727 17.599 5.60405 16.8224 7.29441 15.4975C5.13197 15.4518 3.31978 14.0356 2.69541 12.0863C3 12.132 3.30455 12.1624 3.62437 12.1624C4.06598 12.1624 4.50764 12.1015 4.91878 11.995C2.66498 11.5381 0.974578 9.55839 0.974578 7.16753V7.10664C1.62937 7.47213 2.39086 7.70055 3.19791 7.73097C1.87303 6.8477 1.00505 5.34011 1.00505 3.63452C1.00505 2.72083 1.24866 1.88327 1.67508 1.1523C4.09641 4.13706 7.73602 6.08627 11.8172 6.2995C11.7411 5.93402 11.6954 5.55335 11.6954 5.17263C11.6954 2.46194 13.8883 0.253845 16.6141 0.253845C18.0304 0.253845 19.3095 0.847752 20.208 1.80714C21.3197 1.59395 22.3857 1.18277 23.3299 0.61933C22.9643 1.76149 22.1877 2.72088 21.1674 3.32997C22.1573 3.22342 23.1167 2.94925 23.9999 2.56858C23.33 3.54316 22.4924 4.41114 21.533 5.11169V5.11169Z"
                className="fill-cyan-400"
              />
            </svg>

            <span>Tweet your results</span>
          </a>
        </div>
      </div>
    </>
  );
}
