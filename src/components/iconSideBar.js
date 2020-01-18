import React from 'react';

import SvgIconDiscord from '../Icons/IconDiscord';
import SvgIconLaravel from '../Icons/IconLaravel';
import SvgIconTailwind from '../Icons/IconTailwind';
import IconPlus from '../Icons/IconPlus';
import IconSearch from '../Icons/IconSearch';
import IconDownload from '../Icons/IconDownload';

const IconSideBar = () => {
  return (
    <div className='bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2'>
      <div className='overflow-y-auto'>
        <ul className='text-center'>
          <li className='mt-3'>
            <SvgIconDiscord
              tailwindProps={'w-12 h-12 rounded-full mx-auto'}
              alt={'discord'}
            />
          </li>
          <li className='border-b border-gray-700 mx-4 mt-3'></li>
          <li className='mt-3'>
            <SvgIconLaravel
              tailwindProps={'w-12 h-12 rounded-full mx-auto'}
              alt={'laravel'}
            />
          </li>
          <li className='mt-3'>
            <SvgIconTailwind
              tailwindProps={'w-12 h-12 rounded-full mx-auto'}
              alt={'tailwindcss'}
            />
          </li>
          <li className='mt-3'>
            <IconPlus />
          </li>
          <li class='mt-2'>
            <IconSearch />
          </li>
          <li className='border-b border-gray-700 mx-4 mt-3'></li>
          <li className='mt-3'>
            <IconDownload />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconSideBar;
