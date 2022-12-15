import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  type dataMuse = {
    word: string;
    score: number;
  };
  let searchInput = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<dataMuse[]>([]);
  const getSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const results = await axios.get(
      `https://api.datamuse.com/words?ml=${searchInput.current?.value}`
    );
    setSearchResults(results.data);
    console.log("Searching...", searchInput.current?.value);
  };
  return (
    <div className="flex min-h-screen min-w-max flex-col">
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 w-[80%] grid-cols-2 mx-auto">
        {searchResults &&
          searchResults.map((result) => (
            <div className="p-2">
              <span className="uppercase text-gray-600 text-2xl py">
                {result.word}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
