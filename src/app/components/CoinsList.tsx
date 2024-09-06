import { Coin } from '@/types/Coin';
import Image from 'next/image';

const CoinsList = ({ coins }: { coins: Coin[] }) => {
  return (
    <>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10 mt-10">
        {coins.map((coin) => (
          <li key={coin.uuid} className="flex flex-col items-center">
            <Image
              src={coin.iconUrl}
              alt={coin.name}
              width={70}
              height={70}
              priority
            />
            <h3>{coin.name}</h3>
            <p>{coin.symbol}</p>
            <p>{coin.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinsList;
