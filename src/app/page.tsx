'use client';

import { Coin } from '@/types/Coin';
import { useEffect, useState } from 'react';
import CoinsList from './components/CoinsList';
import Search from './components/Search';

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coins');
      const data = await response.json();
      setCoins(data.data.coins);
    };
    getCoins();
  }, []);

  const handleSearch = async (searchQuery: string) => {
    const response = await fetch(`/api/coins/search?query=${searchQuery}`);
    const data = await response.json();
    setCoins(data);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">Crypto Coins</h1>
      <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <CoinsList coins={coins} />
    </div>
  );
}
