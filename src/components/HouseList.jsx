
import {housesData} from '../assets/data.js';
import HouseCard from './HouseCard';




const HouseList = () => {
  return (
    <section  className='mx-auto  h-full container'>
      <h1 className='text-3xl font-bold text-center my-8'>Houses</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
        {
          housesData.map((house) => (
            <HouseCard key={house.id} house={house} />
           
          ))
        }
      </div>
    </section>
  )
}

export default HouseList