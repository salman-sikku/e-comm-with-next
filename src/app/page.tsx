"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThreeImg from "@/components/ThreeImg";
import IspaisalProduct from "@/components/IspaisalProduct";

export default function Home() {
  
  return (
    <main className='w-full md:px-6 px-4'>
      <section className="md:pt-[131px] pt-[100px]">
        <div
          className="overflow-hidden md:text-[14em] sm:text-[5em] text-[3em] md:leading-[0.85em] leading-[0.95em] tracking-[-0.05em] mt-[70px] font-futura uppercase text-black font-bold"
        >
          <h1>Modify</h1>
        </div>
        <div
          className="overflow-hidden md:text-[14em] sm:text-[5em] text-[3em] md:leading-[0.85em] leading-[0.95em] tracking-[-0.05em] font-futura uppercase text-black font-bold"
        >
          <h1>the Route</h1>
        </div>
      </section>
      <section className=" overflow-hidden md:h-[90vh] md:my-0 my-10 flex justify-center items-center relative">
        <div className="md:w-[40%] w-[80%] md:h-[80%] h-[40%] relative">
          <Image
            src="/images/pt1.png"
            loading="lazy"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            width={960}
            height={340}
            alt="_img"
          />
        </div>
        <div
          className={`absolute left-[58%] top-[18%] md:h-32 h-28 md:w-32 w-28 bg-[#d6e0e0] rounded-full text-lg font-futura flex justify-center items-center`}
        >
          <span>BUY</span>
        </div>
      </section>
      <ThreeImg />
      <section className="w-full md:mt-20 mt-[1546px] md:flex justify-between">
        <div className="md:w-[70%] w-[100%]">
          <h1 className="md:text-[60px] text-[28px] font-bold md:leading-[0.9em] leading-[1em] md:text-left  text-center">WE PLACE OUR FAITH, <br /> UNTIL THEY COVER <br /> FAITH IN THEMSELVES.</h1>
        </div>
        <div className="md:w-[30%] w-[100%]">
          <p className="font-semibold md:w-[80%] w-[100%] md:text-left text-center text-[#444] md:mt-0 mt-5">With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</p>
          <div className="md:mt-8 mt-6 md:text-left text-center">
            <Link href='/shop' className="text-[12px] font-semibold border-[#333] border-b tracking-widest text-[#333]">GO TO SHOP</Link>
          </div>
        </div>
      </section>
      <IspaisalProduct/>
    </main>
  );
}
