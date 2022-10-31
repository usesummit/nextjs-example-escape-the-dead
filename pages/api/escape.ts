// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type EscapeParameters = {
  bank_account: number;
  income_amount: number;
  income_growth_rate: number;
  expenses: number;
  expense_reduction: number;
  expense_delay: number;
};

export type EscapeData =
  | {
      runway: number | null;
    }
  | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EscapeData>
) {
  const parameters = {
    ...req.body,
  };

  if (!process.env.SUMMIT_API_URL || !process.env.SUMMIT_API_KEY) {
    res.status(500).json({ error: "Server not configured properly" });
    return;
  }

  const simulation = await fetch(process.env.SUMMIT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.SUMMIT_API_KEY,
    },
    body: JSON.stringify({ parameters }),
  }).then((res) => res.json());

  const runway = simulation.results.findIndex(
    ({ values }) =>
      typeof values.runway_months !== "undefined" &&
      values.runway_months !== null &&
      values.runway_months <= 0
  );

  return res.status(200).json({ runway, raw: simulation });
}
