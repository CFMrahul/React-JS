import React from "react";
import CurrencyBox from "./CurrencyBox";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/src/assets/Background.jpeg')] bg-cover bg-center p-4">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 w-full max-w-2xl shadow-xl">
        {/* WRAPPER */}
        <div className="relative flex flex-col gap-6">
          {/* FROM */}
          <CurrencyBox label="From" defaultCurrency="USD" />

          {/* TO */}
          <CurrencyBox label="To" defaultCurrency="INR" />

          {/* SWAP BUTTON (Perfect Center of gap) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
              Swap
            </button>
          </div>
        </div>

        {/* CONVERT BUTTON */}
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Convert USD to INR
        </button>
      </div>
    </div>
  );
}
