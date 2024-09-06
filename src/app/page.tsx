'use client';

import { Coin } from '@/types/Coin';
import { useEffect, useState } from 'react';

export default function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coins');
      const data = await response.json();
      setCoins(data.data.coins);
    };
    getCoins();
  }, []);
  return (
    <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">Crypto Coins</h1>
    </div>
  );
}
