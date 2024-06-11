"use client";
import React from 'react'
import Image from 'next/image';
import cereale from '@/src/images/cereale.jpg'

export default function Product() {
  return (
    <div className='ml-20 mr-20 mb-20'>
        <div className='container mx-auto px-4 py-8'>
            <h2 className='text-2xl font-semibold  mb-6'>Trending on sale</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-none p-2'>
                    <div className='relative'>
                        <Image
                           className='w-full h-40 object-cover rounded-t-lg'
                           src={cereale}
                           alt='Cereale'
                           layout='responsive'
                           width={500}
                           height={500}
                        />
                        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>-17%</div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm font-medium'>This is a better cereales for you</h3>
                        <div className='flex items-center mt-2'>
                            <span className='text-yellow-500 text-sm'>&#9733; 3.8</span>
                        </div>
                        <div className='mt-2 flex items-end'>
                            <span className='text-red-600 text-lg font-semibold'>$160.00</span>
                            <span className='text-gray-500 line-through ml-2'>$195.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
