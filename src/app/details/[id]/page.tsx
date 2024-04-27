"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {useCart} from '@/context/Index'


interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  interface Product {
    name: string;
    price: number;
    bgcolor: string,
    description: string,
    imgUrl: string
  }

  const [getProduct, setgetProduct] = useState({ name: '', price: 0, bgcolor: '', imgUrl: '', description: '' });
  const [Isloading, setIsloading] = useState(false) ;
  const {addToCart} = useCart() ;

  const getData = async () => {
    try {
      setIsloading(true)
      const { data } = await axios.get(`/api/get_product/${id}`);
      setgetProduct(data.product);
      setIsloading(false)
    } catch (error) {
      console.log(error);
      setIsloading(false)

    }
  };

  useEffect(() => {
    getData();
  }, [id]);


  const handleCart = (getProduct:any)=>{
     addToCart(getProduct)
  }

  return (
    <>
      <section>
        {
          Isloading ? (<div className='h-screen'><h1 className='mt-20 ml-4'>Loading....</h1></div>) : (<div className={`md:h-screen w-full  bg-[#e6dfd7] relative`}>
            <div className={`md:flex justify-between md:pt-[131px] pt-[100px] px-6`}>
              {getProduct.imgUrl && (
                <div className='md:w-[32%] w-[100%] md:hidden block'>
                  <Image
                    src={getProduct.imgUrl}
                    loading="lazy"
                    width={935}
                    height={200}
                    alt="_img"
                    className="rounded-md"
                  />
                </div>
              )}
              <div className='md:w-[20%] w-[100%]'>
                <h2 className='font-bold text-5xl mt-14 leading-[0.82em]'>{getProduct.name}</h2>
                <div className='w-[300px] md:h-[45px] h-[42px] md:mt-16 mt-14 text-white bg-black rounded-full flex items-center justify-evenly'>
                  <div>
                    <span className='text-[13px] font-semibold pr-3'>+</span>
                    <span className='text-[12px] font-semibold'>1</span>
                    <span className='text-[13px] font-semibold pl-3'>-</span>
                  </div>
                  <div>
                    <span className='text-[12px] font-semibold'>$ {getProduct.price}</span>
                  </div>
                  <div onClick={()=> handleCart(getProduct)}>
                    <span className='text-sm font-semibold'>ADD TO CART</span>
                  </div>
                </div>
              </div>
              {getProduct.imgUrl && (
                <div className='md:w-[32%] w-[100%] md:block hidden'>
                  <Image
                    src={getProduct.imgUrl}
                    loading="lazy"
                    width={935}
                    height={200}
                    alt="_img"
                    className="rounded-md"
                  />
                </div>
              )}
              <div className='md:w-[20%] w-[100%] mt-14'>
                <div className='flex justify-between'>
                  <span className='text-[11px]'>Info</span>
                  <p className='md:w-[70%] w-[65%] text-[15px] md:mb-0 mb-4'>{getProduct.description}</p>
                </div>
              </div>
            </div>
            <div className='w-full absolute b-2 border-t border-black  px-6 md:mt-5 mb-6 flex justify-between'>
              <span className='text-[12px] mt-6'>${getProduct.price}</span>
              <span className='text-[11px] mt-6'>BUY 1, GIVE 1</span>
            </div>
          </div>)
        }
      </section>
    </>
  );
}
