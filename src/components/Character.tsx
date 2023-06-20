import { Character } from '@/types/character';
import Image from 'next/image';
import { FC } from 'react';

interface CharacterProps {
  data:Character
}

const Character: FC<CharacterProps> = ({data}) => {
  return (
    <div className='inline-grid '>
     <figure className='flex flex-col py-4 bg-green-50 justify-center items-center'>
        <Image className='w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto' src={data.image} alt='' width='384' height='512'/> 
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <figcaption className='font-medium text-center'>
            <div className='text-sky-500 dark:text-sky-400'>{data.name}</div>
            <div className='text-slate-700 dark:text-slate-500'>
              {data.status}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Character;
