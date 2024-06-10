import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="bg-white absolute h-20 w-full flex p-4">
          <div className="flex mr-auto md:w-auto flex-shrink-0">
            <img className="h-8 md:h-10" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="" />
            <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
              <span className="font-medium text-sm md:text-md">+ 2YT 7T 1XO 7P 9B</span>
              <span className="font-medium text-sm text-gray-400">Support 24/7</span>
            </div>
          </div>

          <div className="xl:max-w-lg 2xl:max-w-2xl rounded-md hidden xl:flex items-center justify-between space-x-2">
            <div className="flex justify-between space-x-6">
              <p className="font-medium text-sm text-gray-500">Fresh</p>
              <p className="font-medium text-sm">Vegetales</p>
              <p className="font-medium text-sm">Cereales</p>
            </div>
          </div>

          <div className="flex ml-auto space-x-2  items-center justify-end">
            <form class="">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-1.5 ps-10 font-medium text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search ..." required />
                <button type="submit" class="hidden text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800 me-2 mb-2">Search</button>
              </div>
            </form>
            <button type="button" class="transition-all duration-500 text-black  bg-green-400 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-white font-medium text-sm rounded-full px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
              Vendre un produit
            </button>
          </div>



          <nav className="contents">
            <ul className="flex space-x-2">
              <li className="relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 right-0 z-10 bg-green-400 text-xs text-black font-bold px-1 py-0.5 rounded-full">12</div>
                  <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline fa fa-shopping-cart fa-w-18 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path>
                  </svg>
                </a>
              </li>

              <li className="relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 right-0 z-10 bg-green-400 text- black text-xs font-bold px-1 py-0.5 rounded-full">30</div>
                  <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline fa fa-heart fa-w-16 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                  </svg>
                </a>
              </li>

              <li className="relative inline-block">
                <a className="" href="">
                  <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline fa fa-user fa-w-14 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
