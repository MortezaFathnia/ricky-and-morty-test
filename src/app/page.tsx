import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getCharacters } from '@/data-layer/getCharacters';
import Character from '@/components/Character';

export default async function Home() {
  const charactersData = await getCharacters();
  return (
    <>
      <h2>character</h2>
      <div className='md:grid-cols-4 gap-1 grid sm:grid-cols-1'>
        {charactersData?.characters.results.map((ch) => (
          <Character key={ch.id} data={ch} />
        ))}
      </div>
    </>
  );
}
