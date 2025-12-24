import { nav } from 'framer-motion/client'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import logo from"../assets/SrikanthLogo.png"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center' >
            <img className='mx-2  max-h-16  object-contain' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-black'  >
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareTwitter />
        </div>
    </nav>
  )
}

export default Navbar