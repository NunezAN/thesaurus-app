import type { NextPage } from "next";
import React, { useRef } from "react";
const Home: NextPage = () => {
  let searchInput = useRef<HTMLInputElement>(null);
  const getSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching...", searchInput.current?.value);
  };
  return (
    <div className="flex min-h-screen min-w-max">
      <form
        className="p-4 bg-slate-600 h-fit w-[80%] mx-auto my-12 rounded-2xl flex flex-col items-center space-y-4"
        onSubmit={(e) => getSearch(e)}
      >
        <label className="text-2xl text-white">Enter a word :</label>
        <input
          type="text"
          ref={searchInput}
          className="border-white border-2 bg-inherit rounded-2xl p-2 text-white text-2xl"
        />
        <button
          type="submit"
          className="bg-gray-300 text-2xl uppercase font-bold p-2 rounded-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
