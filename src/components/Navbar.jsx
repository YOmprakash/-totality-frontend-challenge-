import logo from '../assets/logo.png'
import { LINKS } from '../assets/data'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className="bg-[#0f1c38] w-full  flex flex-col justify-center items-center">
    <div className="w-full flex justify-between items-center  p-4 lg:max-w-[1200px]">
        <img  src='https://uploads-ssl.webflow.com/6492719dbfcc54669c62f0ea/64928b412b453df40f1c5996_Rentalz-Logo.webp' alt="logo" width={100} height={24} />
        <div className='hidden lg:flex gap-4 '>
            {
                LINKS.map((link,index) => (
                    <a key={index} href={`#${link.targetId}`} className='text-white p-2 uppercase text-sm font-normal hover:underline'>{link.text}</a>
                ))
            }
        </div>
        <div className='hidden lg:flex gap-4'>
            <button className='text-white p-2 uppercase text-sm font-normal'>My Bookings</button>
            <button className='text-white rounded-md bg-purple-500 px-4 py-2'>Sign In</button>
        </div>
        <div className='lg:hidden'>
        <button onClick={() => setOpen(!open)} className='text-white p-2'>
            {
                open ? <FaTimes /> : <FaBars />
            }
        </button>
    </div>
    </div>
    {
        open && (
    <div className='w-full lg:hidden pl-2 pb-4'>
            {
                LINKS.map((link,index) => (
                    <a key={index} href={`#${link.targetId}`} className='text-white uppercase p-2 block text-sm'>{link.text}</a>
                ))
            }
            <div className='flex flex-col space-y-2 '>
            <button className='text-white p-2 uppercase text-sm self-start font-normal'>My Bookings</button>
            <button className='text-white rounded-md self-start p-2 ml-2 bg-[#f9a826]  mb-2'>Sign In</button>
            </div>
        </div>
    
        )}
    </nav>
  )
}

export default Navbar