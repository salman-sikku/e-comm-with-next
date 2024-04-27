import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';


export default function IspaisalProduct() {

    const [products, setProducts] = useState([]);

    const getFuntion = async () => {
        try {
            const { data } = await axios.get('/api/product/allProduct');
            setProducts(data.products);
        } catch (error: any) {
            console.log(error)
        };
    };

    useEffect(() => {
        getFuntion();
    })


    return (
        <>
            <section className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8 mt-12 md:mt-16 lg:mt-28'>
                {products.slice(0, 4).map((curElm: any) => (
                    <Link href={`/details/${curElm._id}`} className='h-auto md:h-[82vh] flex justify-center items-center flex-col' key={curElm.name}>
                        <Image
                            src={curElm.imgUrl}
                            loading="lazy"
                            width={400}
                            height={200}
                            alt="_img"
                            className="rounded-md"
                        />
                        <span className="mt-4 md:mt-16 text-[13px] text-[#444] font-semibold">{curElm.name}</span>
                        <span className="mt-1 md:mt-2 text-[12px] text-[#444] font-semibold">${curElm.price}</span>
                    </Link>
                ))}
            </section>

        </>
    );
}
