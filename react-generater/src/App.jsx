import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGeneratorUI() {
  const [length, setLength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [symboleAllow, setSymboleAllow] = useState(false);
  const [uppercaseAllow, setUppercaseAllow] = useState(true);
  const [lowercaseAllow, setLowercaseAllow] = useState(true);
  const [password, setPassword] = useState("");

  // true and false function
  const toggle = (prev) => !prev;

  // useRef Hook
  const passwordRef = useRef(null);

  // useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (uppercaseAllow) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseAllow) str += "abcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (symboleAllow) str += "!@#$%^&*_?.";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, symboleAllow, uppercaseAllow, lowercaseAllow]);

  // useCallback Hook
  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current?.select(); // these are heightlight of selected strings.
    passwordRef.current?.setSelectionRange(0, 16); // this is set ot limited of strings.
    if (password) {
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  // this process is a type of auto generat the password.
  useEffect(() => {
    passwordGenerator();
  }, [
    // length,
    // numAllow,
    // symboleAllow,
    // lowercaseAllow,
    // uppercaseAllow,
    // passwordGenerator,
  ]);
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="mb-4">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Generated password"
              className="bg-transparent outline-none flex-1 text-sm"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClickboard}
              className="ml-2 text-sm bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block text-sm mb-1">
            Password Length: <span className="font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="16"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="space-y-2 mb-6">
          <label className="flex items-center justify-between text-sm">
            Include Uppercase
            <input
              checked={uppercaseAllow}
              onChange={() => setUppercaseAllow(toggle)}
              type="checkbox"
              className="accent-blue-500"
            />
          </label>

          <label className="flex items-center justify-between text-sm">
            Include Lowercase
            <input
              checked={lowercaseAllow}
              onChange={() => setLowercaseAllow(toggle)}
              type="checkbox"
              className="accent-blue-500"
            />
          </label>

          <label className="flex items-center justify-between text-sm">
            Include Numbers
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(toggle)}
              className="accent-blue-500"
            />
          </label>

          <label className="flex items-center justify-between text-sm">
            Include Symbols
            <input
              type="checkbox"
              checked={symboleAllow}
              onChange={() => setSymboleAllow(toggle)}
              className="accent-blue-500"
            />
          </label>
        </div>

        {/* Generate Buttom */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
