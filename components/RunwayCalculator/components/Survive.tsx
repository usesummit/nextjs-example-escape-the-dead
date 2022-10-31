import Head from "next/head";

export default function Survive({
  runwayUrl,
  tweetUrl,
}: {
  runwayUrl: string;
  tweetUrl: string;
}) {
  return (
    <>
      <Head>
        <title>I survived! | Escape the Dead</title>
        <meta
          property="og:title"
          content="I survived! | Escape the Dead"
          key="og:title"
        />
        <meta
          property="og:description"
          content="With our growth, we'll be around until next Halloween. Will you join us?"
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="I survived! | Escape the Dead"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="With our growth, we'll be around until next Halloween. Will you join us?"
          key="twitter:description"
        />
      </Head>

      <div className="bg-cyan-400 py-8 px-2 sm:px-4 md:px-8 rounded-lg space-y-8 w-full max-w-3xl flex flex-col items-center text-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <svg
            width="54"
            height="48"
            viewBox="0 0 54 48"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current h-10 md:h-12"
          >
            <path d="M27 4.5C16.2281 4.5 7.5 13.2281 7.5 24C7.5 24.5344 7.52156 25.0688 7.56375 25.5094H7.50094C6.41156 24.0469 4.52625 23.6437 3.00188 24.3094C3.00094 24.2062 3 24.1031 3 24C3 10.7438 13.7438 0 27 0C40.2562 0 51 10.7438 51 24C51 37.2562 40.2562 48 27 48C20.0156 48 13.725 45.0187 9.33938 40.2469C10.5563 39.2344 11.4469 37.8469 11.8125 36.2344C13.5844 38.4187 15.8062 40.2187 18.3469 41.475C18.1219 40.6875 18 39.8625 18 39V37.5656C17.0438 36.8906 16.5 36.0938 16.5 35.25C16.5 32.7656 21.1969 30.75 27 30.75C32.8031 30.75 37.5 32.7656 37.5 35.25C37.5 36.0938 36.9562 36.8906 36 37.5656V39C36 39.8625 35.8781 40.6875 35.6531 41.475C42.0844 38.2875 46.5 31.6594 46.5 24C46.5 13.2281 37.7719 4.5 27 4.5ZM33 39V36.9938C33 35.6156 31.8844 34.5 30.5062 34.5H30.3187C29.2594 34.5 28.3406 35.2406 28.1062 36.2719C27.7594 37.4531 26.1563 37.4531 25.8938 36.2719C25.6594 35.2406 24.7406 34.5 23.6813 34.5H23.4938C22.1156 34.5 21 35.6156 21 36.9938V39C21 42.3094 23.6906 45 27 45C30.3094 45 33 42.3094 33 39ZM9 34.5938C9 35.925 8.39812 37.1156 7.44844 37.9219C6.65812 38.5969 5.62688 39 4.5 39C2.01938 39 0 37.0312 0 34.5938C0 32.9719 2.01 29.9156 3.34312 28.0687C3.5475 27.7781 3.73687 27.525 3.9 27.3094C4.2 26.8969 4.8 26.8969 5.1 27.3094C6.33469 28.9312 8.91562 32.7188 8.91562 34.5938H9ZM34.4625 22.5C36.1219 22.5 37.4625 23.8406 37.4625 25.5C37.4625 27.1594 36.1219 28.5 34.4625 28.5C32.7281 28.5 31.4625 27.1594 31.4625 25.5C31.4625 23.8406 32.7281 22.5 34.4625 22.5ZM19.4625 28.5C17.7281 28.5 16.4625 27.1594 16.4625 25.5C16.4625 23.8406 17.7281 22.5 19.4625 22.5C21.1219 22.5 22.4625 23.8406 22.4625 25.5C22.4625 27.1594 21.1219 28.5 19.4625 28.5ZM21.3094 13.9406C21.9 14.5219 21.9 15.4781 21.3094 16.0594L20.6156 16.7531C18.4125 18.9656 15.5625 20.4281 12.4781 20.9437L12.2438 20.9813C11.4281 21.1125 10.6594 20.5594 10.5187 19.7438C10.3875 18.9281 10.9406 18.1594 11.7563 18.0187L11.9906 17.9813C14.4563 17.5688 16.7344 16.3969 18.4969 14.6344L19.1906 13.9406C19.7719 13.35 20.7281 13.35 21.3094 13.9406ZM32.6906 16.0594C32.1 15.4781 32.1 14.5219 32.6906 13.9406C33.2719 13.35 34.2281 13.35 34.8094 13.9406L35.5031 14.6344C37.2656 16.3969 39.5438 17.5688 42.0188 17.9813L42.2438 18.0187C43.0594 18.1594 43.6125 18.9281 43.4812 19.7438C43.3406 20.5594 42.5719 21.1125 41.7562 20.9813L41.5219 20.9437C38.3531 20.4281 35.5875 18.9656 33.3844 16.7531L32.6906 16.0594Z" />
          </svg>

          <h2 className="uppercase font-bold tracking-wider text-xl md:text-2xl">
            You&rsquo;re escaping?!
          </h2>
        </div>

        <div className="max-w-md mx-auto text-center md:text-lg space-y-3">
          <p>
            None of us know how, but it appears you&rsquo;ll be making it to the
            next All Hallow&rsquo;s Eve. Perhaps you knew of our plans all
            along?
          </p>
          <p>
            As disappointing as we find this, we&rsquo;ve signed a pact to keep
            an eye on you, just in case …
          </p>
        </div>

        <div className="flex justify-center gap-3 flex-col md:flex-row w-full items-center">
          <a
            href={runwayUrl}
            className="text-cyan-400 bg-white px-3 py-3 inline-flex rounded font-medium items-center text-sm md:text-base"
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
              className="h-5 md:h-6 mr-2"
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
