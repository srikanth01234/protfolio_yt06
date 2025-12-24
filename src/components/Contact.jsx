import React from 'react'
import { CONTACT } from "../constants";
import {motion} from "framer-motion";
import { div } from 'framer-motion/client';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20' >
        <div className='text-center' >
        <motion.h1
        whileInView={{ opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition = {{duration : 1.5}}
        className='my-10 text-4xl text-neutral-900' >
            Get in Touch
        </motion.h1>
        <div className='tracking-tighter'>
            <motion.p
            whileInView={{ opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition = {{duration : 1}}
    className='my-4 text-neutral-700 '
            >
                {CONTACT.address}
            </motion.p>
            <motion.p
                whileInView={{ opacity:1,x:0}}
    initial={{opacity:0,x:100}}
    transition = {{duration : 1}}
    className='my-4 text-neutral-900 '

            >
                {CONTACT.phoneNo}

            </motion.p>
            <a href="#" 
            className='border-b text-neutral-700 '>
                {CONTACT.email}
            </a>
        </div>
</div>
    </div>
    
  )
}

export default Contact 