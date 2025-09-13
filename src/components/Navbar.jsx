import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/BookWebLogo.png'
import Logo2 from '../assets/Logo2.png'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";



const Navbar = ({searchTerm, setSearchTerm}) => {


    console.log(searchTerm)



    return (
        <div className='sticky mb-11 top-0 z-40 h-24 w-full shadow-md px-12  inset-shadow-neutral-950 flex items-center justify-between border-b border-b-gray-50 bg-white/10 backdrop-blur-sm '>
            <div className='flex items-center'>
                 <Link to={"/"}> <img src={Logo2} alt="" className='w-24 rounded-md shadow-sm shadow-emerald-800 cursor-pointer sm:block hidden' /> </Link>
            </div>
            <Link to={"favorites"} className='flex items-center gap-3 text-xl font-semibold sm:bg-gradient-to-br bottom-0 from-gray-200 to-cyan-200 backdrop-blur-md px-4 sm:py-2.5 py-3 ml-[-18px] mr-4 cursor-pointer rounded-full text-neutral-900 hover:bg-gradient-to-b hover:from-cyan-200 hover:to-emerald-300 shadow-sm transform transition-all duration-300'>
                <h1 className='font-semibold sm:block hidden'>Favorite Books</h1>
                <MdOutlineFavorite className='text-red-500 text-2xl' />
            </Link>

            <div className='sm:mr-7  flex items-center bg-transparent px-4 py-2 text-gray-700 border-0 focus-within:text-blue-400 focus-within:border focus-within:border-blue-400 outline-none rounded-full shadow-md'>
                <input 
                    type="text" 
                    placeholder='Search here...' 
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    className='border-none outline-none text-[17px] px-2 py-1 text-black' />
                <IoSearchOutline className='text-2xl' />
            </div>
        </div>
    )
}

export default Navbar