import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden'>
      <div className='flex-shrink-0'>
        <Image
          src={product.pictures}
          alt={product.title}
          width={400}
          height={400}
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className='p-5 flex flex-col justify-between flex-grow'>
        <h5 className='text-lg font-semibold tracking-tight text-gray-900 mb-3'>
          {product.title}
        </h5>
        <p className='font-normal text-gray-700 mb-4'>
          Price: ${product.price.toFixed(2)}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
            ${product.targetPrice1.toFixed(2)}
          </span>
          <span className='bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
            ${product.targetPrice2.toFixed(2)}
          </span>
          <span className='bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded'>
            ${product.targetPrice3.toFixed(2)}
          </span>
        </div>

        <div className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
          <Link href={`/product/${product.id}`}>Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
