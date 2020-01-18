import React from 'react';
import avatar from '../assets/avatar2.jpg';

const LeftSidebarBottom = () => {
  return (
    <div className='bg-gray-850 flex py-2 px-2 items-center justify-between'>
      {/* Avatar section */}
      <div className='flex items-center'>
        <button>
          <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
        </button>
        <div className='text-xs ml-2'>
          <div className='text-white'>adamTailwind</div>
          <div className='text-gray-500 text-xxs'>#9589</div>
        </div>
      </div>
      {/* Icon Section */}
      <div className='flex items-center text-gray-500'>
        <button className='hover:text-white'>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'></path>
            <path d='M0 0h24v24H0z' fill='none'></path>
          </svg>
        </button>
        <button className='hover:text-white'>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0z' opacity='.1' fill='none'></path>
            <path d='M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z'></path>
          </svg>
        </button>
        <button className='hover:text-white'>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0z' fill='none'></path>
            <path d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebarBottom;
