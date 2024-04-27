"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoReorderTwoOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Signup from "./Signup";
import Cart from "./Cart";
import {useCart} from '@/context/Index'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(true);
  const {cart} = useCart() ;
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center py-8 lg:py-6 md:px-6 px-5">
        <div className="flex items-center gap-[1ch]">
          <div className="md:w-4 md:h-4 w-3 h-3 bg-black rounded-full" />
          <Link href='/' className="md:text-2xl text-[19px] font-futura font-semibold ">
            GOODSHOP
          </Link>
        </div>
        <div
          className="cursor-pointer md:w-32 w-28 h-8 px-3 rounded-full flex justify-between items-center border font-bold text-black"
        >
          <span onClick={toggleMenu} className="text-2xl"><IoReorderTwoOutline /></span>
          <div onClick={()=> setcartOpen(true)} className="text-lg relative"><PiShoppingCartSimpleLight /> {cart.length > 0 && <div className="w-[6px] h-[6px] absolute top-0 right-0 bg-[#9ff97f] rounded-full"></div>}</div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full origin-top bg-black text-white p-10"
          >
            <div className="flex h-full flex-col ">
              <div className="flex justify-between">
                <h1 className="text-sm font-semibold font-futura tracking-widest">TWOGOODSHOP</h1>
                <p
                  className="cursor-pointer text-lg"
                  onClick={toggleMenu}
                >
                  <RxCross2 />
                </p>
              </div>
              {
                openSignup ? <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-2 "
              >
                <div className="overflow-hidden">
                  <motion.div
                    onClick={()=> setOpen(false)}
                    variants={mobileLinkVars}
                    className="md:text-6xl text-5xl font-futura uppercase text-white font-bold"
                  >
                    <Link href='/shop'>SHOP</Link>
                  </motion.div>

                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="md:text-6xl text-5xl font-futura uppercase text-white font-bold"
                  >
                    <Link href='/'>CONTACT</Link>
                  </motion.div>

                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="md:text-6xl text-5xl font-futura uppercase text-white font-bold"
                  >
                    <Link href='/'>ABOUT</Link>
                  </motion.div>

                </div>
                <div className="overflow-hidden">
                  <motion.div
                    onClick={()=> setOpenSignup(false)}
                    variants={mobileLinkVars}
                    className="md:text-6xl text-5xl cursor-pointer font-futura uppercase text-white font-bold"
                  >
                    <span>SIGN UP</span>
                  </motion.div>

                </div>
              </motion.div> : <Signup containerVars={containerVars} mobileLinkVars={mobileLinkVars} setOpenSignup={setOpenSignup} setOpen={setOpen}/>
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full origin-top bg-black text-white"
          >
            <div className="flex h-full flex-col ">
              <div className="flex justify-between md:px-10 px-4 pt-8">
                <h1 className="text-sm font-semibold font-futura tracking-widest">TWOGOODSHOP</h1>
                <p
                  className="cursor-pointer text-lg"
                  onClick={()=> setcartOpen(false)}
                >
                  <RxCross2 />
                </p>
              </div>
              <Cart setcartOpen={setcartOpen}/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

