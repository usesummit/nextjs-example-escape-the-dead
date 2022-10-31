import { MouseEventHandler, useCallback, useMemo, useState } from "react";
import { EscapeParameters } from "../../pages/api/escape";
import Dead from "./components/Dead";
import Form from "./components/Form";
import Survive from "./components/Survive";

export enum State {
  Idle,
  Loading,
  Success,
}

const generateSummitRunwayCalculator = (data: EscapeParameters) => {
  const url = new URL(
    "https://usesummit.com/summit-agency/165b6a/simple-runway-calculator/"
  );

  url.searchParams.set("_title", `Escape the Dead 🧟‍♂️`);
  url.searchParams.set(
    "_description",
    `The dead members of the startup graveyard have been resurrected … and they're hungry for your company.  Discover your path to escape your fate!

[Escape the Dead](https://escapethedead.com)`
  );

  Object.entries(data).forEach(([key, value]) => {
    url.searchParams.set(key, value.toString());
  });

  return url.toString();
};

export default function RunwayCalculator() {
  const [state, setState] = useState<State>(State.Idle);
  const [runway, setRunway] = useState(-1);
  const [runwayURL, setRunwayURL] = useState("");

  const calculateRunway = useCallback(async (data: EscapeParameters) => {
    setState(State.Loading);

    const calculation = await fetch("/api/escape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    setRunway(calculation.runway);
    setRunwayURL(generateSummitRunwayCalculator(data));
    setState(State.Success);
  }, []);

  const onReset: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();

    setState(State.Idle);
    setRunway(-1);
  }, []);

  const tweetURL = useMemo(() => {
    const url = new URL("https://twitter.com/intent/tweet");
    url.searchParams.set(
      "text",
      `The dead members of the startup graveyard have been resurrected … and they're hungry for your company.  Discover your path to escape your fate!`
    );
    url.searchParams.set("url", `https://escapethedead.com?runway=${runway}`);
    return url.toString();
  }, [runway]);

  return (
    <>
      {state !== State.Success ? (
        <Form onSubmit={calculateRunway} state={state} />
      ) : (
        <>
          {runway === -1 ? (
            <Survive runwayUrl={runwayURL} tweetUrl={tweetURL} />
          ) : (
            <Dead runway={runway} runwayUrl={runwayURL} tweetUrl={tweetURL} />
          )}
          <button
            className="inline-flex items-center mt-6 text-zinc-400 hover:underline font-medium p-2 text-sm md:text-base"
            onClick={onReset}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-1.5 fill-current"
            >
              <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
            </svg>
            Restart
          </button>
        </>
      )}
    </>
  );
}
