"use client"

import React, { useEffect, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import axios from 'axios';
import Link from 'next/link';


export default function Page() {
    const [products, setProducts] = useState([]);

    const getFuntion = async ()=>{
       try {
         const {data} = await axios.get('/api/product/allProduct') ;
         setProducts(data.products);
       } catch (error: any) {
         console.log(error)
       };
    };


    useEffect(()=>{
        getFuntion() ;
    })
    return (
        <>
            <div className='w-full md:px-6 px-4'>
                <section className='md:pt-[131px] pt-[80px] md:flex justify-between'>
                    <div className="overflow-hidden md:text-[10em] text-[3em] leading-[0.85em] tracking-[-0.05em] mt-[70px] font-futura uppercase text-black font-bold">
                        <h1>GOOD</h1>
                        <h1 className='flex'>SHOP <span className='ml-1 md:block hidden'><RiArrowDownSLine /></span> </h1>
                    </div>
                    <div className='md:w-[35%] w-[100%] md:pt-20 pt-4 text-[#494949] text-[13px] font-semibold'>
                        <p>We craft premium, eco-friendly, lavish items - including toiletries, clothing, throws, and candles. Essentially, goods that evoke a sense of home. And the greatest aspect? Each purchase holds the power to alter the trajectory of someone's life.</p>
                    </div>
                </section>
                <section className='md:w-[88vw] w-[80vw] md:m-auto grid grid-rows-2 md:grid-cols-3 grid-cols-2 md:mt-28 mt-14 md:gap-32 gap-14'>
                    {products.map((curElm: any, index: number) => (
                        <Link href={`/details/${curElm._id}`} className=' md:h-[300px] h-[120px] md:w-[310px] w-[140px] flex justify-center items-center flex-col ' key={index}>
                            <Image
                                src={curElm.imgUrl}
                                loading="lazy"
                                width={935}
                                height={200}
                                alt="_img"
                                className="rounded-md"
                            />
                            <span className="md:mt-2 md:text-[12px] text-[10px] text-[#333] font-semibold text-center">{curElm.name}</span>
                            <span className=" mt-[4px] md:text-[12px] text-[11px] text-[#333] font-semibold">${curElm.price}</span>
                        </Link>
                    ))}
                </section>
            </div>
        </>
    )
}
