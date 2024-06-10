"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import oignon from '@/src/images/oignon.jpg';
import welcome from '@/src/images/welcome.png';

import "swiper/css";
import "swiper/css/pagination";

export default function PerformanceChart() {

  return (
    <>
    
    <div className="flex flex-col mt-20 bg-green-400 w-[100%] h-[35%] bg-cover blur-0 items-left justify-center">
      <div className="justify-center items-center ml-10 space-y-4">
      <p className="font-bold text-6xl text-black ml-60 mb-2">Agro Shops.</p>
      <span className="font-medium text-xl text-black items-start justify-start ml-60">The First Online Marketplace for Agro Business</span>
      </div>
    </div>

    {/* <div className="flex flex-col mt-20 bg-ttuPattern w-[45%] h-[100%] bg-cover blur-0 items-center justify-center">
    </div> */}
    
    </>
  );
}
