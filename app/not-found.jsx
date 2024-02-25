'use client';

import Link from 'next/link';

const NotFoundPage = ({ message = 'Something went wrong.' }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <p className='mb-4 text-xl font-bold text-red-600'>{message}</p>
      <div className='flex space-x-4'>
        <button
          onClick={refreshPage}
          className='px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Refresh
        </button>
        <Link href='/'>
          <div className='px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700'>
            Go to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
