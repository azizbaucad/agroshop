"use client";
import React from 'react'
import Image from 'next/image';
import cereale from '@/src/images/cereale.jpg';

export default function Category() {
    return (
        <div className='relative text-gray-800 text-left h-[700px]'>
            <div className='pb-1'>
                <p className='text-xl font-semibold text-center mt-10 text-gray-800'>Reliable, efficient delivery</p>
                {/* <p className='text-xl font-semibold text-center mt-0'>Powered by Nexus AI</p> */}
                <p className='text-xl font-hairline text-center mt-3 my-4 mx-10 xl:px-64 xl:mx-48 md:px-48 text-gray-800'>Our Agro Businees Plateform that you nedd to sell and buy your local agricol product</p>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 xl:mx-32 mx-10 gap-8 my-4 grid-rows-4 md:grid-cols-2'>
                <div className='bg-white border-t-4 border-red-600 md:col-1 md:row-start-3 md:row-end-5 rounded-md shadow-none py-6 pl-8 pr-16 relative col-2 xl:row-start-1 xl:row-end-3'>
                    <p className='font-semibold text-xl'>Nos cereales</p>
                    <p className='text-gray-600 mt-2 leading-2 mb-4'>Découvrez nos céréales bio savoureuses et nutritives</p>
                    <Image
                        className='w-full h-20 object-cover rounded-t-lg'
                        src={cereale}
                        alt='Cereale'
                        layout='responsive'
                        width={500}
                        height={500}
                    />
                    <div className='flex mt-2 mb-2 mr-2 w-full'>
                        <h5 className='absolute bg-gray-800 justify-end items-end rounded-none text-sm font-semibold text-white bottom-0 right-0 mt-4 mb-2 mr-3 p-2'>View More</h5>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="absolute bottom-0 right-0 mb-6 mr-6">
                        <g fill="none">
                            <path fill="#EFEFF4" d="M64 14.454v41.788H0V14.454l3.75-3.787h56.5z" />
                            <path fill="#DADAE5" d="M64 14.454v41.788H32V10.667h28.25z" />
                            <path fill="#474F54" d="M0 0h64v15.515H0z" />
                            <path fill="#32393F" d="M32 0h32v15.515H32z" />
                            <g fill="#FF637B">
                                <path d="M7.758 5.818h3.685v3.879H7.758zM15.128 5.818h3.685v3.879h-3.685zM22.497 5.818h3.685v3.879h-3.685z" />
                            </g>
                            <path fill="#FF637B" d="M45.576 42.245V64H34.355v-3.71h-3.74V64H19.394V42.245l11.37-9.275h3.105z" />
                            <path fill="#DADAE5" d="M11.636 22.303h41.697v3.879H11.636z" />
                            <path fill="#C9C9D3" d="M32 22.303h20.364v3.879H32z" />
                            <path fill="#E63950" d="M45.576 42.245V64H33.939v-3.71H32V32.97h1.435z" />
                            <path fill="#EFEFF4" d="M30.061 45.576h3.878v3.879h-3.878z" />
                            <path fill="#DADAE5" d="M32 45.576h1.939v3.879H32z" />
                            <path fill="#676E74" d="M50.424 45.779l-2.452 2.706-15.487-13.526-15.488 13.526-2.452-2.706 17.94-15.718z" />
                            <path fill="#474F54" d="M32 30.061l18.424 15.718-2.518 2.706L32 34.959z" />
                        </g>
                    </svg> */}
                </div>
                

                <div className='bg-white border-t-4 border-green-400 md:col-1 md:row-start-3 md:row-end-5 rounded-md shadow-none py-6 pl-8 pr-16 relative col-2 xl:row-start-1 xl:row-end-3'>
                    <div className='relative'>
                        <p className='font-semibold text-xl'>Nos legumes</p>
                        <p className='text-gray-600 mt-2 leading-2 mb-4'>Commandez dès aujourd'hui et savourez la différence de nos légumes bio</p>
                        <Image
                            className='w-full h-20 object-cover rounded-t-lg'
                            src={cereale}
                            alt='Cereale'
                            layout='responsive'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex mt-2 mb-2 mr-2 w-full'>
                        <h5 className='absolute bg-gray-800 justify-end items-end rounded-none text-sm font-semibold text-white bottom-0 right-0 mt-4 mb-2 mr-3 p-2'>View More</h5>
                    </div>

                    {/* <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' className='absolute bottom-0 right-0 mb-6 mr-6'>
                    <g fill='none'>
                            <path fill="#676E74" d="M56.842 7.158c-9.526-9.563-24.902-9.525-34.428 0-8.025 8.026-9.45 20.44-3.525 30.003l-2.513 2.55-1.356 6.144 4.214 4.214 5.093-2.408 2.512-2.55a24.254 24.254 0 0030.003-3.525c9.563-9.526 9.525-24.902 0-34.428z" />
                            <path fill="#474F54" d="M24.327 47.661l2.512-2.55a24.254 24.254 0 0030.003-3.525c9.563-9.526 9.525-24.902 0-34.428l-40.26 40.26 2.652 2.651 5.093-2.408z" />
                            <path fill="#64E1DC" d="M54.213 9.787a20.56 20.56 0 00-14.585-6.041C28.236 3.746 19 12.98 19 24.372a20.564 20.564 0 006.041 14.586 20.564 20.564 0 0014.586 6.04c11.392 0 20.626-9.234 20.626-20.626a20.56 20.56 0 00-6.041-14.585z" />
                            <path fill="#00C8C8" d="M60.254 24.372a20.56 20.56 0 00-6.041-14.585l-29.17 29.17A20.564 20.564 0 0039.627 45c11.392 0 20.626-9.235 20.626-20.627z" />
                            <path fill="#EFEFF4" d="M56.239 23.41c-.184-.307-2.98-4.914-7.281-8.368-2.63-2.113-5.822-3.796-9.33-3.796-9.242 0-16.314 11.669-16.61 12.165l-.576.961.575.961c.184.309 2.98 4.916 7.28 8.37 2.631 2.112 5.823 3.795 9.33 3.795 9.243 0 16.315-11.668 16.612-12.165l.574-.96-.574-.962z" />
                            <path fill="#DADAE5" d="M56.239 25.333l.574-.96-.574-.962c-.184-.308-2.98-4.915-7.281-8.369l-18.66 18.66c2.63 2.113 5.822 3.796 9.33 3.796 9.242 0 16.314-11.668 16.61-12.165z" />
                            <path fill="#64E1DC" d="M43.604 20.396a5.607 5.607 0 00-3.976-1.65 5.632 5.632 0 00-5.626 5.626c0 1.551.631 2.958 1.65 3.976a5.609 5.609 0 003.976 1.65 5.632 5.632 0 005.625-5.626c0-1.55-.63-2.957-1.649-3.976z" />
                            <path fill="#00C8C8" d="M45.253 24.372c0-1.55-.63-2.957-1.649-3.976l-7.952 7.952a5.608 5.608 0 003.976 1.65 5.632 5.632 0 005.625-5.626z" />
                            <path fill="#676E74" d="M40.954 23.046a1.876 1.876 0 10-1.326 3.2 1.876 1.876 0 001.326-3.2z" />
                            <path fill="#474F54" d="M41.503 24.372c0-.517-.21-.986-.55-1.326l-2.65 2.652a1.876 1.876 0 003.2-1.326z" />
                            <path fill="#575C60" d="M20.333 43.667l-3.957-3.957L0 56.049l3.975 3.976L7.951 64l16.376-16.339z" />
                            <path fill="#333637" d="M24.327 47.661l-3.994-3.994L3.975 60.025 7.951 64z" />
                        </g>
                    </svg> */}

                </div>

                <div className='bg-white border-t-4 border-yellow-500 md:col-1 md:row-start-3 md:row-end-5 rounded-md shadow-none py-6 pl-8 pr-16 relative col-2 xl:row-start-1 xl:row-end-3'>
                    <div className='relative'>
                        <p className='font-semibold text-xl'>Nos Fruits</p>
                        <p className='text-gray-600 mt-2 leading-2 mb-4'>Savourez la fraîcheur de nos fruits bio</p>
                        <Image
                            className='w-full h-20 object-cover rounded-t-lg'
                            src={cereale}
                            alt='Cereale'
                            layout='responsive'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex mt-2 mb-2 mr-2 w-full'>
                        <h5 className='absolute bg-gray-800 justify-end items-end rounded-none text-sm font-semibold text-white bottom-0 right-0 mt-4 mb-2 mr-3 p-2'>View More</h5>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="absolute bottom-0 right-0 mb-6 mr-6">
                        <g fill="none">
                            <path fill="#676E74" d="M26.375 52.625h11.25V64h-11.25z" />
                            <path fill="#333637" d="M32 52.625h5.625V64H32z" />
                            <path fill="#4C545A" d="M22.625 47h18.75v9.375h-18.75z" />
                            <path fill="#52585C" d="M32 47h9.375v9.375H32z" />
                            <path fill="#FFDA2D" d="M45.012 36.725c-2.325 1.913-3.637 4.612-3.637 7.425V47h-18.75v-2.85c0-2.85-1.238-5.512-3.3-7.125-5.062-3.938-7.95-9.862-7.95-16.275a20.585 20.585 0 017.613-16.013C22.7 1.737 27.238 0 32 0c1.462 0 2.962.15 4.425.45 8.1 1.688 14.475 8.45 15.9 16.663 1.275 7.5-1.425 14.85-7.313 19.612z" />
                            <path fill="#FDBF00" d="M45.012 36.725c-2.325 1.913-3.637 4.612-3.637 7.425V47H32V0c1.462 0 2.962.15 4.425.45 8.1 1.688 14.475 8.45 15.9 16.663 1.275 7.5-1.425 14.85-7.313 19.612z" />
                            <path fill="#676E74" d="M18.875 45.125h26.25v3.75h-26.25z" />
                            <path fill="#FF9100" d="M39.956 10.143l2.651 2.651-3.979 3.978-2.651-2.651z" />
                            <path fill="#FDBF00" d="M25.372 24.727l2.651 2.651-3.979 3.979-2.651-2.651zM30.125 28.25h3.75v5.625h-3.75z" />
                            <path fill="#FF9100" d="M38.628 24.727l3.979 3.979-2.651 2.651-3.979-3.979zM39.5 18.875h5.625v3.75H39.5z" />
                            <path fill="#FDBF00" d="M24.044 10.143l3.979 3.979-2.651 2.65-3.979-3.978zM18.875 18.875H24.5v3.75h-5.625zM30.125 7.625h3.75v5.625h-3.75z" />
                            <g fill="#FFDA2D">
                                <path d="M0 18.875h7.625v3.75H0zM6.585 14.81l-5.75-3.75 2.08-3.12 5.75 3.75zM2.915 33.56l-2.08-3.12 5.75-3.75 2.08 3.12z" />
                            </g>
                            <path fill="#FDBF00" d="M56.375 18.875H64v3.75h-7.625zM61.085 33.56l-5.75-3.75 2.08-3.12 5.75 3.75zM57.415 14.81l-2.08-3.12 5.75-3.75 2.08 3.12z" />
                            <path fill="#FF9100" d="M32 7.625h1.875v5.625H32zM32 28.25h1.875v5.625H32z" />
                            <path fill="#333637" d="M32 45.125h13.125v3.75H32z" />
                            <path fill="#FDBF00" d="M32 11.375c-5.175 0-9.375 4.2-9.375 9.375s4.2 9.375 9.375 9.375 9.375-4.2 9.375-9.375-4.2-9.375-9.375-9.375z" />
                            <path fill="#FF9100" d="M32 30.125v-18.75c5.175 0 9.375 4.2 9.375 9.375s-4.2 9.375-9.375 9.375z" />
                            <path fill="#FFDA2D" d="M30.125 18.875h3.75v3.75h-3.75z" />
                            <path fill="#FDBF00" d="M32 18.875h1.875v3.75H32z" />
                        </g>
                    </svg> */}


                </div>

            </div>
        </div>
    )
}
