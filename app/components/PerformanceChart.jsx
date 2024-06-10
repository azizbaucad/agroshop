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
    <div className="flex justify-center md:w-full bg-gray-200 items-start mt-20">
              <Image
               src={welcome}
               alt="Title One Plus"
               width={450}
               height={450}
               quality={100}
               className="w-[100%] h-[75%] object-cover"
              />
    </div>
  );
}
