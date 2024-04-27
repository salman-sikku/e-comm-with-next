import { useCart } from '@/context/Index';
import Link from 'next/link';
import { Ri24HoursFill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";

export default function Cart({setcartOpen}:any) {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id: any) => {
    removeFromCart(id)
  }

  return (
    <>
      {
        cart.length > 0 ? (<section className='md:p-10 p-4'>
          <div className='md:mt-32 mt-16'>
            {
              cart.map((curElm, index) => (
                <div className='flex justify-between items-center h-[80px] border-t  border-[#323232]' key={index}>
                  <div className=' md:text-sm text-[13px] font-semibold text-[#dbdbdb] uppercase w-[20%]'>
                    <h2 className='overflow-hidden'>{curElm.name}</h2>
                  </div>
                  <div className='text-[#dbdbdb]'>
                    <span className='text-[13px] font-semibold pr-3'>-</span>
                    <span className='text-[12px] font-semibold'>1</span>
                    <span className='text-[13px] font-semibold pl-3'>+</span>
                  </div>
                  <div className='text-[#dbdbdb] flex items-center'>
                    <span className='text-[12px] font-semibold'>${curElm.price}</span>
                    <span onClick={() => handleRemove(curElm.id)} className='cursor-pointer text-[12px] font-semibold ml-8'><RxCross2 /></span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex justify-between items-center h-[80px] border-t  border-[#323232]'>
            <div>
              <h2 className='md:text-sm text-[12px] font-semibold text-[#323232] uppercase'>delevery</h2>
              <h2 className='md:text-sm text-[12px] font-semibold text-[#323232] uppercase mt-1'>subtotal</h2>
            </div>
            <div>
              <h2 className='md:text-sm text-[12px] font-semibold text-[#dbdbdb] uppercase'>shipping calculater at check-out</h2>
              <h2 className='md:text-[13px] text-[11px] font-semibold text-[#dbdbdb] uppercase text-right mt-1'>$100</h2>
            </div>
          </div>
          <div className='flex justify-end items-center'>
            <div className='md:w-[40%] w-[100%] font-semibold mt-10 h-[65px] border border-[#dbdbdb] rounded-full flex justify-center items-center'>
              <span>CHECKOUT</span>
            </div>
          </div>
        </section>) : (
          <section>
            <div className='flex flex-col justify-center items-center mt-20 text-semibold'>
              <h2 className='text-2xl'>Your Cart is empty.</h2>
              <Link href={'/shop'} onClick={()=> setcartOpen(false)} className='mt-8 md:text-[15px] text-sm uppercase md:w-[24%] w-[80%] md:h-[65px] h-[55px] rounded-full border border-[#dbdbdb] font-semibold flex justify-center items-center'>
                <span>see all good thinks</span>
              </Link>
            </div>
            <div className='overflow-hidden h-[80px] border-t border-[#323232] md:text-4xl text-[11px] font-bold mt-20 flex justify-between items-center'>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
              <h1 className="animate-slideLeftRight">CART</h1>
            </div>
            <div className='overflow-hidden h-[80px] border-t border-[#323232] md:text-5xl text-[11px] font-bold flex justify-between items-center'>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
              <h1 className="animate-slideRightLeft">EMPTY</h1>
            </div>

          </section>
        )
      }
    </>
  )
}
