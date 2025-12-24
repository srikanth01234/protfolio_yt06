// import { div } from 'framer-motion/client'
import React from 'react'
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";
import { div, span } from 'framer-motion/client';

const Project = () => {
  return (
    <div className='border-b border-neutral-800 pb-4' >
       <motion.h1 
       whileInView={{ opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition = {{duration : 0.5}}
        className='my-20 text-center text-4xl text-black'
       >
        Projects
        </motion.h1> 
        <div>
            {PROJECTS.map((Project,index) =>(
                <div
                key={index}
                className='mb-8 flex flex-wrap lg:justify-center'
                >
                <motion.div
                whileInView={{ opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition = {{duration : 0.5}}
                className='w-full lg:w-1/4'
                >
                    <img src={Project.image}
                    height={150}
                    width={150}
                    alt={Project.title} 
                    className='mb-6 rounded border-4 border-neutral-300' />

                </motion.div>
                <motion.div
                whileInView={{ opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition = {{duration : 0.5}}
                className='w-full max-w-xl lg:w-3/4'
                >
                    <h6 className='mb-2 font-semibold text-neutral-900 ' >
                        {Project.title}
                    </h6>
                    <p className='mb-4 text-neutral-700' >
                        {Project.description}
                    </p>
                    <div>
                        {Project.technologies.map((tech,index) =>(
                            <span
                            key={index}
                            className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm
                            font-medium text-pink-200'
                            >
                                {tech}
                            </span>
                        ) )}
                    </div>

                </motion.div>
                </div>
            ) )}
        </div>

    </div>
  )
}

export default Project