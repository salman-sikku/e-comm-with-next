import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { GoArrowRight } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";
import SignIn from './SignIn';


interface MyComponentProps {
  containerVars: any;
  mobileLinkVars: any;
  setOpenSignup: any;
  setOpen:any
}

const Signup: React.FC<MyComponentProps> = ({ containerVars, mobileLinkVars, setOpenSignup, setOpen }) => {
  const [openSignIn, setOpenSignIn] = useState(true);
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errormsg, seterrormsg] = useState('');

  const submitHandler = async (e:any)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/user/signup', {username, email, password}); 
      setusername('');
      setemail('');
      setpassword('');
      setOpenSignIn(false)
    } catch (error:any) {
      console.log(error.response.data.error);
      seterrormsg(error.response.data.error)
    }
  }

  return (
    <>
      {
        openSignIn ? (<motion.form
          onSubmit={submitHandler}
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col h-full  justify-center font-lora items-center gap-2 "
        >
          <div className="overflow-hidden">
            <motion.div
              onClick={()=> setOpenSignup(true)}
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="rounded-full text-white bg-black md:w-80 w-64 h-4 flex justify-end items-center"
            >
              <span className='text-[12px] font-semibold cursor-pointer'>BACK TO MENU</span>
              <span className='text-sm font-semibold ml-4 cursor-pointer'><FaAngleDown/></span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="md:text-7xl text-6xl font-futura uppercase text-white font-bold"
            >
              <h2>SIGN UP</h2>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="relative md:w-80 w-72 h-10 rounded-full mt-3"
            > 
              <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} placeholder='USERNAME' required className='w-[100%] h-[100%] absolute top-0 px-4 text-[13px] font-semibold text-[#333] outline-none rounded-full' />
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="relative md:w-80 w-72 h-10 rounded-full mt-1"
            >
              <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder='EMAIL' required className='w-[100%] h-[100%] absolute top-0 px-4 text-[13px] font-semibold text-[#333] outline-none rounded-full' />
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="relative md:w-80 w-72 h-10 rounded-full mt-1"
            >
              <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='PASSWORD' required className='w-[100%] h-[100%] absolute top-0 px-4 text-[13px] font-semibold text-[#333] outline-none rounded-full' />
            </motion.div>
          </div>
          {
            errormsg ? ( <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="relative md:w-80 w-72 h-10 rounded-full mt-1 bg-[#1a1a1a] text-red-500 flex items-center"
            >
              <span className='text-[16px] font-bold mx-4'><RiErrorWarningLine/></span>
              <span className='text-sm font-semibold'>{errormsg}</span>
            </motion.div>
          </div>) : ''
          } 
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="rounded-full mt-2 text-[#222] bg-white border border-white transition-all duration-300 ease-in-out hover:text-white hover:bg-black md:w-80 w-72 h-14 flex justify-center items-center"
            >
              <button className='text-sm font-semibold'>SIGN UP</button>
              <span className='text-sm font-semibold ml-4'><GoArrowRight/></span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars} // Assuming mobileLinkVars is defined somewhere
              className="rounded-full text-white bg-black md:w-80 w-64 h -4 mt-2 flex justify-end items-center"
            >
              <span className='text-[12px] font-semibold'>ALREDY HAVE AN ACCOUNT?</span>
              <span onClick={()=> setOpenSignIn(false)} className='text-[12px] ml-1 cursor-pointer border-white'>SINGN IN</span>
            </motion.div>
          </div>
        </motion.form>) : <SignIn containerVars={containerVars} mobileLinkVars={mobileLinkVars} setOpenSignup={setOpenSignup} setOpenSignIn={setOpenSignIn} setOpen={setOpen}/>
      }
    </>
  );
};

export default Signup;
