import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import HouseCard from './HouseCard';

const HouseList = () => {
  const { filteredHotels } = useContext(CartContext);

  return (
    <section className='mx-auto h-full container my-8'>
      <h1 className='text-3xl font-bold text-center my-8'>Houses</h1>
      {filteredHotels.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[90%] mx-auto'>
          {filteredHotels.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center  w-full h-screen'>
        <p className='text-center mt-4 text-xl font-bold'>No results found</p>
      </div>
      )}
    </section>
  );
};

export default HouseList;
