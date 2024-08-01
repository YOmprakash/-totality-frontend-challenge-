
import home from '../assets/house-banner.png'
import HouseList from '../components/HouseList'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen mt-4">
        <div className='flex flex-col items-center lg:justify-between lg:flex-row   py-20 '>
            <div className='lg:ml-6 xl:ml-[95px]  lg:items-start mx-2 lg:mx-8 flex-1 pb-8 lg:pb-0'>
                <h2 className='text-4xl lg:text-[58px] leading-none text-center lg:text-left font-medium text-[#0f1c38]'><span className='text-violet-700'>Rent</span> Your Dream house with us</h2>
                <p className='text-center font-light text-[18px] lg:text-left mt-4 max-w-[520px]'>Discover the perfect home away from home in our diverse selection of rentals. Choose the accommodation that best suits your needs.</p>
            </div>
            <img src={home} alt="home" className='w-full flex-1 rounded-lg max-w-[500px]  object-contain' />
        </div>
    </section> 
    <Search/>
    <HouseList/>
    </>
  )
}

export default HomePage