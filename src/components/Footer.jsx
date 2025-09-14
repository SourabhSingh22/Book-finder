import React from 'react'
import { GiDevilMask } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import portfolio from '../assets/image.png'


const Footer = () => {
  return (
    <div className='sm:h-24 h-20  sm:mt-10 mt-12.5 w-full mb-0 bg-[#BBDCE5] backdrop-blur-md shadow-sm flex items-center px-10 justify-center'>
      <div className='flex gap-6 text-3xl '>
        <Link className='cursor-pointer hover:shadow-blue-950 shadow rounded-full p-2 transition-all duration-300' to={'https://sourabhsinghportfolio.netlify.app/'}>
          <img src={portfolio} alt="" className='w-8 text-transparent' />
        </Link>
        <Link className='cursor-pointer hover:shadow-blue-950 shadow rounded-full p-2 transition-all duration-300' to={'https://www.linkedin.com/in/saurabh-singh-036809258/'}>
          <FaLinkedin />
        </Link>
        <Link className='cursor-pointer hover:shadow-blue-950 shadow rounded-full p-2 transition-all duration-300' to={'https://github.com/SourabhSingh22'}>
          <FaSquareGithub />
        </Link>
      </div>
    </div>
  )
}

export default Footer