import React from 'react';
import ChatInput from './chatInput';

const dummyAvatarComments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MainContentBody = () => {
  return (
    <div className='bg-gray-750 flex-1 flex flex-col justify-between'>
      <div className='text-sm text-gray-400 overflow-y-auto'>
        {dummyAvatarComments.map(dummy => (
          <div className='flex mx-6 my-3 py-4 border-t border-gray-700'>
            <div className='flex-none '>
              <button>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://avatars3.githubusercontent.com/u/22605062?s=460&v=4'
                  alt='avatar'
                />
              </button>
            </div>
            <div className='ml-5'>
              <div>
                <button className='text-white hover:underline'>
                  drehimself
                </button>
                <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
              </div>
              <div>
                <div>yea hahah</div>
                <div>some other comments</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Chat input */}
      <ChatInput />
    </div>
  );
};

export default MainContentBody;
