import React from "react";

export default function CurrencyBox({ label, defaultCurrency }) {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <input
          type="number"
          placeholder="0"
          className="text-2xl outline-none w-32 px-2 py-1 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
      </div>

      <div>
        <p className="text-gray-400 text-sm mb-1">Currency Type</p>
        <select className="bg-gray-100 px-3 py-2 rounded-lg">
          <option>{defaultCurrency}</option>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  );
}
