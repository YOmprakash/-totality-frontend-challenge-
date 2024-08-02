import { Link } from 'react-router-dom'

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState ,useContext} from 'react';
import { CartContext } from '../context/CartContext';
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-[#0f1c38] w-full  flex flex-col justify-center items-center">
    <div className="w-full flex justify-between items-center  p-4 lg:max-w-[1200px]">
    <Link to="/">
        <img  src='https://uploads-ssl.webflow.com/6492719dbfcc54669c62f0ea/64928b412b453df40f1c5996_Rentalz-Logo.webp' alt="logo" width={100} height={24} />
    </Link>
    <div className='flex '>
       
                    <Link to='/'  className='text-white hidden lg:flex gap-4 p-2 uppercase text-sm font-normal hover:underline'>
                     Home</Link>
                   
                    
        
        
        <div className='hidden lg:flex gap-4'>
        <Link to='/cart'>
        <button className='ml-4 text-white p-2  font-normal'>Cart <span className='px-[8px] py-[2px] bg-purple-500 ml-1 text-white font-bold rounded-full'>{cartItems.length}</span></button>
        </Link>
           

        </div>
        </div>
        <div className='lg:hidden flex items-center'>
        <Link to='/cart'>
        <button className='text-white p-2  text-sm font-normal'>Cart <span className='px-[8px] py-[2px] bg-purple-500 ml-1 text-white font-bold rounded-full'>{cartItems.length}</span></button>
        </Link>
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
    <ul >
            
            <li  className='text-white p-2 uppercase text-sm font-normal hover:underline'>
                <Link to='/'>Home</Link>
            </li>
            <li  className='text-white p-2 uppercase text-sm font-normal hover:underline'>
                <Link to='/'>properties</Link>
            </li>
   
</ul>

        </div>
    
        )}
    </nav>
  )
}

export default Navbar