import "./App.css";
import UseCurrency from "./assets/hooks/UseCurrency.js";

import backImage from "./assets/back.jpg";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [toCurrency, setToCurrency] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState("inr");

  const currency = UseCurrency(fromCurrency);

  const convert = () => {
    setResult(amount * currency[toCurrency]);
  };
  const currencyList = Object.keys(currency || {});

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div
          className="min-h-screen w-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="h-fit w-1/3  p-10 flex flex-wrap flex-col justify-center items-center bg-gray-900/50">
            <div className="border rounded-lg m-3 p-3 mb-0  bg-white w-full h-fit flex flex-col ">
              <div className="flex flex-row justify-between">
                <label className="text-gray-500 m-2">FROM</label>
                <label className="text-gray-500 m-2">CURRENCY TYPE</label>
              </div>
              <div className="flex flex-row justify-between">
                <input
                  type="number"
                  placeholder={fromCurrency}
                  value={amount}
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  className="border-none focus:none bg-white p-3 m-2 w-fit"
                ></input>
                <select
                  onChange={(e) => {
                    setFromCurrency(e.target.value);
                  }}
                  value={fromCurrency}
                >
                  {currencyList.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className=" bg-blue-500 text-white rounded-md h-fit w-fit p-2"
              onClick={swap}
            >
              SWAP
            </button>
            <div className="border rounded-lg m-3 p-3 mt-0  bg-white w-full h-fit flex flex-col ">
              <div className="flex flex-row justify-between">
                <label className="text-gray-500 m-2">TO</label>
                <label className="text-gray-500 m-2">CURRENCY TYPE</label>
              </div>
              <div className="flex flex-row justify-between">
                <input
                  type="number"
                  placeholder={toCurrency}
                  value={result}
                  readOnly
                  className="border-none focus:none bg-white p-3 m-2 w-fit"
                ></input>
                <select
                  onChange={(e) => {
                    setToCurrency(e.target.value);
                  }}
                  value={toCurrency}
                >
                  {currencyList.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="w-full h-fit p-3 text-white bg-blue-500 border-none rounded-lg mt-3"
              type="submit"
            >
              CONVERT {fromCurrency.toUpperCase()} TO {toCurrency.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
