import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../assets/Logo2.png'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";



const Navbar = ({searchTerm, setSearchTerm}) => {



    console.log(searchTerm)



    return (
        <div className='sticky mb-11 top-0 z-40 h-24 w-full shadow-md px-12  inset-shadow-neutral-950 flex items-center justify-between border-b border-b-gray-50 bg-white/10 backdrop-blur-2xl '>
            <div className='flex items-center'>
                 <Link to={"/"}> <img src={Logo2} alt="" className='w-24 rounded-md shadow-sm shadow-emerald-800 cursor-pointer sm:block hidden' /> </Link>
            </div>
            <Link to={"favorites"} className='flex items-center gap-3 text-xl font-semibold sm:bg-[#6BAED6] backdrop-blur-md px-4 sm:py-2.5 py-3 ml-[-18px] mr-4 cursor-pointer rounded-full text-[#FFFFFF] hover:bg-[#0b0c0d] hover:text-[#ded9d9] shadow-sm transform transition-all duration-300'>
                <h1 className='font-semibold sm:block hidden'>Favorite Books</h1>
                <MdOutlineFavorite className='text-[#FFFFFF] text-2xl' />
            </Link>

            <div className='sm:mr-7  flex items-center bg-[#FFFFFF] px-4 py-2 text-[#2E3A59] border-0 border-[#E5E7EB]  focus-within:border-2 focus-within:border-[#66b9f8] outline-none rounded-full shadow-lg'>
                <input 
                    type="text" 
                    placeholder='Search here...' 
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    className='border-none outline-none text-[17px] px-2 py-1 placeholder:text-[#9CA3AF] ' />
                <IoSearchOutline className='text-2xl text-[#4f4545] ' />
            </div>
        </div>
    )
}

export default Navbar