import React, { FormEvent, useCallback, useState } from "react";
import { EscapeParameters } from "../../../pages/api/escape";
import parseHumanReadableNumber from "../../../utils/parseHumanReadableNumber";
import { State } from "../RunwayCalculator";

const ensureValidParameter = (value: string) => {
  try {
    return parseHumanReadableNumber(value.trim());
  } catch (e) {
    return null;
  }
};

export default function Form({
  onSubmit,
  state,
}: {
  onSubmit: (data: EscapeParameters) => void;
  state: State;
}) {
  const [bankAccount, setBankAccount] = useState("1.5m");
  const [incomeAmount, setIncomeAmount] = useState("240k");
  const [incomeGrowthRate, setIncomeGrowthRate] = useState("8");
  const [expenses, setExpenses] = useState("666k");
  const [expenseReduction, setExpenseReduction] = useState("0");
  const [expenseDelay, setExpenseDelay] = useState("0");

  const wrappedOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: EscapeParameters = {
        bank_account: ensureValidParameter(bankAccount) ?? 0,
        income_amount: ensureValidParameter(incomeAmount) ?? 0,
        income_growth_rate: ensureValidParameter(incomeGrowthRate) ?? 0,
        expenses: -1 * (ensureValidParameter(expenses) ?? 0),
        expense_reduction: ensureValidParameter(expenseReduction) ?? 0,
        expense_delay: ensureValidParameter(expenseDelay) ?? 0,
      };

      onSubmit(data);
    },
    [
      bankAccount,
      incomeAmount,
      incomeGrowthRate,
      expenses,
      expenseReduction,
      expenseDelay,
      onSubmit,
    ]
  );

  return (
    <div>
      <h2 className="mx-auto mb-12 text-center font-extrabold uppercase tracking-widest text-amber-400 text-xl">
        About your business
      </h2>
      <form
        action="/api/escape"
        className="space-y-12"
        method="post"
        onSubmit={wrappedOnSubmit}
      >
        <div className="space-y-8 md:space-y-6">
          <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
            <label htmlFor="bank_account" className="w-40">
              Current balance
            </label>
            <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
              <span className="text-zinc-500 p-2">$</span>
              <input
                className="w-full flex-1 py-2 pr-2 text-base focus:outline-none bg-transparent"
                type="text"
                name="bank_account"
                id="bank_account"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex md:items-center gap-3 md:gap-1.5 flex-col md:flex-row">
            <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
              <label htmlFor="income_amount" className="w-40">
                Monthly income
              </label>
              <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
                <span className="text-zinc-500 p-2">$</span>
                <input
                  className="w-full flex-1 py-2 pr-2 text-base focus:outline-none bg-transparent"
                  type="text"
                  name="income_amount"
                  id="income_amount"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
              <label htmlFor="income_growth_rate" className="w-auto md:px-2">
                growing at
              </label>
              <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
                <input
                  className="w-full flex-1 p-2 text-base focus:outline-none bg-transparent"
                  type="text"
                  name="income_growth_rate"
                  id="income_growth_rate"
                  value={incomeGrowthRate}
                  onChange={(e) => setIncomeGrowthRate(e.target.value)}
                />
                <span className="text-zinc-500 p-2">%</span>
              </div>
            </div>
          </div>
          <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
            <label htmlFor="expenses" className="w-40">
              Monthly expenses
            </label>
            <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
              <span className="text-zinc-500 p-2">$</span>
              <input
                className="w-full flex-1 py-2 pr-2 text-base focus:outline-none bg-transparent"
                type="text"
                name="expenses"
                id="expenses"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
          </div>
          <div className="flex md:items-center gap-3 md:gap-1.5 flex-col md:flex-row">
            <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
              <label htmlFor="expense_reduction" className="w-40">
                Expense reduction
              </label>
              <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
                <span className="text-zinc-500 p-2">$</span>
                <input
                  className="w-full flex-1 py-2 pr-2 text-base focus:outline-none bg-transparent"
                  type="text"
                  name="expense_reduction"
                  id="expense_reduction"
                  value={expenseReduction}
                  onChange={(e) => setExpenseReduction(e.target.value)}
                />
              </div>
              <div className="flex md:items-center gap-1.5 flex-col md:flex-row">
                <label htmlFor="expense_delay" className="w-auto md:px-2">
                  after
                </label>
                <div className="w-full flex-1 rounded border-2 border-zinc-500 bg-zinc-700 focus-within:border-zinc-300 flex items-center">
                  <input
                    className="w-full flex-1 p-2 text-base focus:outline-none bg-transparent"
                    type="text"
                    name="expense_delay"
                    id="expense_delay"
                    value={expenseDelay}
                    onChange={(e) => setExpenseDelay(e.target.value)}
                  />
                  <span className="text-zinc-500 p-2">months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto flex items-center rounded-md bg-rose-500 hover:bg-rose-600 py-3 px-4 font-semibold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-rose-900 h-12"
        >
          {state === State.Loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-5 w-5 mr-2 transform rotate-180 fill-zinc-50"
            >
              <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="mr-2 h-5 w-5 fill-zinc-50"
          >
            <path d="M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305 264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z" />
          </svg>
          {state !== State.Loading && "Start running"}
        </button>
      </form>
    </div>
  );
}
