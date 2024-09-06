'use client';

import { Coin } from '@/types/Coin';
import { FormEvent, useState } from 'react';

type SearchProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (query: string) => void;
};

const Search = ({ query, setQuery, handleSearch }: SearchProps) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSearch(query);
  };
  return (
    <div className="text-center my-20">
      <form onSubmit={handleSubmit}>
        <input
          className="text-black border-2 border-black rounded-full px-3 py-2"
          type="text"
          placeholder="Search coin..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-black text-white rounded-full px-3 py-2
         hover:bg-black/60"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
