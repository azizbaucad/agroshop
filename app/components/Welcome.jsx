"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import oignon from '@/src/images/oignon.jpg';
import welcome from '@/src/images/welcome.png';

import "swiper/css";
import "swiper/css/pagination";

export default function Welcome() {

  return (
    <div className="flex w-full h-[50%] space-x-2 p-2">

      <div className="flex flex-col space-y-1">
        <div className="bg-gradient-to-r from-green-400 to-green-300 h-[50%] bg-cover blur-0 items-start justify-start rounded-2xl mt-1 ml-0 p-10">
          <div className="justify-start items-start ml-0 space-y-4">
            <p className="font-bold text-6xl text-black ml-0 mb-2">Agro Shops.</p>
            <span className="font-medium text-xl text-black items-start justify-start ml-0">The First Online Marketplace for Agro Business</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="bg-white h-[75%] bg-cover blur-0 items-start justify-start rounded-2xl mt-1 ml-0 p-10">
            <div className="justify-start items-start ml-0 space-y-4">
              <p className="font-bold text-6xl text-black ml-0 mb-2">Agro Shops.</p>
              <span className="font-medium text-xl text-black items-start justify-start ml-0">The First Online Marketplace for Agro Business</span>
            </div>
          </div>
          <div className="bg-white h-[75%] bg-cover blur-0 items-start justify-start rounded-2xl mt-1 ml-1 p-10">
            <div className="justify-start items-start ml-0 space-y-4">
              <p className="font-bold text-6xl text-black ml-0 mb-2">Agro Shops.</p>
              <span className="font-medium text-xl text-black items-start justify-start ml-0">The First Online Marketplace for Agro Business</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col space-y-2">
          <div className="bg-white object-cover border-t-4 w-full h-full border-green-400 bg-cover rounded-2xl mt-1 ml-0 p-6 flex items-start justify-between">
            <div className="space-y-2">
              <p className="font-medium text-lg text-black">Cool savings for sunny days</p>
            </div>
            <div className="flex w-full bg-ttuPattern object-cover h-[100%] rounded-full ml-20">
              <p className="hidden">Write Some</p>
              
            </div>
          </div>
          <div className=" bg-white h-[57%] bg-cover blur-0 items-start justify-start rounded-2xl mt-1 ml-0 p-10">
            <div className="justify-start items-start ml-0 space-y-4">
              <p className="font-bold text-6xl text-black ml-0 mb-2">Agro Shops.</p>
              <span className="font-medium text-xl text-black items-start justify-start ml-0">The First Online Marketplace for Agro Business</span>
            </div>
          </div>
        </div>
        <div className=" bg-white h-[83%] bg-cover blur-0 items-start justify-start rounded-2xl mt-1 ml-1 p-10">
          <div className="justify-start items-start ml-0 space-y-4">
            <p className="font-bold text-6xl text-black ml-0 mb-2">Agro Shops.</p>
            <span className="font-medium text-xl text-black items-start justify-start ml-0">The First Online Marketplace for Agro Business</span>
          </div>
        </div>
      </div>

    </div>
  );
}
