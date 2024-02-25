'use client';

import Loading from '@/components/Loading';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductDetailsPage = ({ params }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/published-products/${params.id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [params.id]);

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loading />
      </div>
    );

  if (!productDetails)
    return (
      <div className='flex justify-center items-center h-screen'>
        No product details available.
      </div>
    );

  const {
    product,
    price,
    targetPrice1,
    targetPrice2,
    targetPrice3,
    maxSaleLimit,
    inStock,
    campaign,
  } = productDetails;
  const { shippableProduct } = product;
  const {
    pictures,
    seller,
    brandName,
    category,
    subcategory,
    subcategory2,
    subcategory3,
    description1,
    description2,
    specifications,
    msrp,
    warranty,
    manufacturerCountry,
    upc,
    isRefurbished,
    notes2,
  } = shippableProduct;

  return (
    <div className='container mx-auto px-6 py-12'>
      <div className='grid lg:grid-cols-2 gap-12'>
        <div>
          {pictures.list.map((picture, index) => (
            <div key={index} className='mb-4'>
              <Image
                src={picture}
                alt={shippableProduct.title}
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          ))}
        </div>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold text-gray-900'>
            {shippableProduct.title}
          </h1>
          <p className='text-xl text-gray-600'>{description1}</p>
          <p className='text-md text-gray-500'>{description2}</p>
          <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Details</h2>
            <ul className='list-disc list-inside space-y-2 mt-2'>
              <li>
                <strong>Brand:</strong> {brandName}
              </li>
              <li>
                <strong>Category:</strong>{' '}
                {`${category} > ${subcategory} > ${subcategory2} > ${subcategory3}`}
              </li>
              <li>
                <strong>MSRP:</strong> ${msrp}
              </li>
              <li>
                <strong>Price:</strong> ${price}
              </li>
              <li>
                <strong>Target Prices:</strong> ${targetPrice1}, ${targetPrice2}
                , ${targetPrice3}
              </li>
              <li>
                <strong>Warranty:</strong> {warranty}
              </li>
              <li>
                <strong>Manufacturer Country:</strong> {manufacturerCountry}
              </li>
              <li>
                <strong>UPC:</strong> {upc}
              </li>
              <li>
                <strong>Refurbished:</strong> {isRefurbished}
              </li>
              <li
                dangerouslySetInnerHTML={{
                  __html: `<strong>Specifications:</strong> ${specifications.replace(
                    /&bull;/g,
                    '•'
                  )}`,
                }}
              ></li>
              <li>
                <strong>Additional Notes:</strong> {notes2}
              </li>
              <li>
                <strong>Stock:</strong> {inStock} units
              </li>
              <li>
                <strong>Max Sale Limit:</strong> {maxSaleLimit} units per
                customer
              </li>
              {campaign && (
                <li>
                  <strong>Campaign:</strong> {campaign.name}, ends on{' '}
                  {new Date(campaign.endDate).toLocaleDateString()}
                </li>
              )}
            </ul>
          </div>
          <div className='border-t border-gray-200 pt-4 mt-4'>
            <p className='text-sm text-gray-600'>
              <strong>Seller:</strong> {seller.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
