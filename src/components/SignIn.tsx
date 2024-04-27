import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { RiErrorWarningLine } from "react-icons/ri";

import axios from 'axios';

interface MyComponentProps {
  containerVars: any;
  mobileLinkVars: any;
  setOpenSignup: any;
  setOpenSignIn: any;
  setOpen:any
}

const SignIn: React.FC<MyComponentProps> = ({ containerVars, mobileLinkVars, setOpenSignup, setOpenSignIn, setOpen }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errormsg, seterrormsg] = useState('');

  const router = useRouter();


  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/user/login', { email, password });
      setemail('');
      setpassword('');
      setOpen(false)
      router.push('/')
    } catch (error: any) {
      seterrormsg(error.response.data.msg)
    }
  }

  return (
    <>

      <motion.form
      onSubmit={submitHandler}
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col h-full  justify-center font-lora items-center gap-2 "
      >
        <div className="overflow-hidden">
          <motion.div
            onClick={() => setOpenSignup(true)}
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="rounded-full text-white bg-black md:w-80 w-64 h-4 flex justify-end items-center"
          >
            <span className='text-[12px] font-semibold cursor-pointer'>BACK TO MENU</span>
            <span className='text-sm font-semibold ml-4 cursor-pointer'><FaAngleDown /></span>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="md:text-7xl text-6xl font-futura uppercase text-white font-bold"
          >
            <h2>SIGN IN</h2>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="relative md:w-80 w-72 h-10 rounded-full mt-3"
          >
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='EMAIL' required className='w-[100%] h-[100%] absolute top-0 px-4 text-[13px] font-semibold text-[#333] outline-none rounded-full' />
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="relative md:w-80 w-72 h-10 rounded-full mt-1"
          >
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='PASSWORD' required className='w-[100%] h-[100%] absolute top-0 px-4 text-[13px] font-semibold text-[#333] outline-none rounded-full' />
          </motion.div>
        </div>
        {
          errormsg ? (<div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="relative md:w-80 w-72 h-10 rounded-full mt-1 bg-[#1a1a1a] text-red-500 flex items-center"
            >
              <span className='text-[16px] font-bold mx-4'><RiErrorWarningLine /></span>
              <span className='text-sm font-semibold'>{errormsg}</span>
            </motion.div>
          </div>) : ''
        }
        <div className="overflow-hidden">
          <motion.button
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="rounded-full mt-2 text-[#222] bg-white border border-white transition-all duration-300 ease-in-out hover:text-white hover:bg-black md:w-80 w-72 h-14 flex justify-center items-center"
          >
            <span className='text-sm font-semibold'>SIGN UP</span>
            <span className='text-sm font-semibold ml-4'><GoArrowRight /></span>
          </motion.button>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
            className="rounded-full text-white bg-black md:w-80 w-64 h-4 mt-2 flex justify-end items-center"
          >
            <span className='text-[12px] font-semibold'>NEED AN ACCOUNT?</span>
            <span onClick={() => setOpenSignIn(true)} className='text-[12px] ml-1 cursor-pointer border-white'>SINGN UP</span>
          </motion.div>
        </div>
      </motion.form>
    </>
  );
};

export default SignIn;
