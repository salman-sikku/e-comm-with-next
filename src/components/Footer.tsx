import React from 'react'

export default function Footer() {
  const data = new Date().getFullYear()
  return (
    <>
      <footer className='flex justify-center items-center flex-col mb-8 md:mb-16 mt-16 md:mt-36'>
        <ul className='w-full md:w-auto flex justify-center flex-wrap'>
          <li className='mx-2 md:mx-4 my-1 text-xs md:text-sm text-[#9f9f9f] font-semibold'>© GOOD SHOP. {data}</li>
          <li className='mx-2 md:mx-4 my-1 text-xs md:text-sm text-[#9f9f9f] font-semibold'>TERMS OF USE</li>
          <li className='mx-2 md:mx-4 my-1 text-xs md:text-sm text-[#9f9f9f] font-semibold'>PRIVACY POLICY</li>
        </ul>
        <p className='md:block hidden text-xs md:text-sm w-[90%] md:w-[70%] text-[#555] font-semibold text-center mt-8 md:mt-12'>
          We cherish the honor and privilege of residing on this land and carrying forward the timeless tradition of communal gathering around nourishment, initiated millennia ago by the First Nations. As we gather on this unceded territory, we honor the enduring legacy of the First Nations as the original stewards of this land, acknowledging their profound bond with the earth, water, sky, and community, which persists to this day. We offer profound respect to the esteemed elders of the community, both past and present, as well as those who are yet to guide us, as they safeguard the memories, customs, culture, and aspirations of Aboriginal and Torres Strait Islander peoples.
        </p>
        <p className='md:hidden block text-xs md:text-sm w-[90%] md:w-[70%] text-[#555] font-semibold text-center mt-8 md:mt-12'>
          We cherish the honor and privilege of residing on this land and carrying forward the timeless tradition of communal gathering around nourishment, initiated millennia ago by the First Nations. As we gather on this unceded territory, we honor the enduring legacy of the First Nations as the.
        </p>
      </footer>

    </>
  )
}
