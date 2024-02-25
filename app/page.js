'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/published-products`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setProducts(shuffled);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className='bg-gray-700 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              Find Your Perfect Product
            </h1>
            <p className='my-4 text-xl text-white'>
              Explore a wide range of products for your next purchase.
            </p>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <div className='flex justify-center mt-6'>
        <div className='text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 m-8 rounded'>
          <Link href='/product'>View All Products</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
