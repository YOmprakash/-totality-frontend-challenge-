import logo from '../assets/logo.png'
import { LINKS } from '../assets/data'
const Navbar = () => {
  return (
    <nav className="bg-[#0f1c38] w-full  flex flex-col justify-center items-center">
    <div className="w-full flex justify-between items-center p-4">
        <img  src={logo} alt="logo" className='w-24' />
        <div>
            {
                LINKS.map((link,index) => (
                    <a key={index} href={`#${link.targetId}`} className='text-white p-2'>{link.text}</a>
                ))
            }
        </div>
        <div >
            <button className='text-white p-2'>My List</button>
            <button className='text-white rounded-md bg-[#f9a826] p-2'>Sign In</button>
        </div>
    </div>

    </nav>
  )
}

export default Navbar