import { NextRequest, NextResponse } from 'next/server';

async function fetchCoins() {
  const response = await fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'db6a7ff857mshcded0b7987d7aedp1b7c1bjsn9011d71d7afa',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
    }
  );

  const coins = await response.json();
  return coins;
}

export async function GET(request: NextRequest) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}
