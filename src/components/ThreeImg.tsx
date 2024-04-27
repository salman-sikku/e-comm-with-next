"use client"
import React from 'react';
import Image from "next/image";

const dataOfImages: any = [
   { for: 'home', img: '/images/balket.jpg' },
   { for: 'bath', img: '/images/black.jpg' },
   { for: 'pantry', img: '/images/chola.jpg' },
]

export default function ThreeImg() {
   return (
      <>
         <section className='md:mt-14'>
            <div className='flex justify-center flex-col text-center'>
               <h1 className='md:text-[60px] text-[26px] font-bold'>BUY SOAP, GIVE HOPE.</h1>
               <span className='md:text-sm text-[12px] font-semibold text-[#333] mt-2'>EXPLORE OUR WHOLESALE SITE THAT INSPIRE WHOLE COMMUNITIES.</span>
            </div>
            <div className='border-b border-b-black w-full mt-16'>
                 <span className='text-sm'>BUY THINKS</span> 
            </div>
            <div className='h-screen w-full md:flex justify-between mt-4'>
               {dataOfImages.map((curElm: any) => (
                  <div className='md:w-[32%] w-[100%] h-full relative md:mt-0 mt-4' key={curElm.for}>
                     <Image
                        src={curElm.img}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                        alt="_img"
                        className="rounded-md"
                     />
                     <div className='w-full flex justify-center items-center h-full absolute'>
                        <div className={`bg-[#edf3ff] w-72 h-12 flex items-center justify-evenly rounded-full`}>
                           <span className='h-2 w-2 rounded-full bg-black'></span>
                           <span className='uppercase text-[12px]'>shop</span>
                           <span className='uppercase text-sm font-semibold'>{curElm.for}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </section>
      </>
   )
}
