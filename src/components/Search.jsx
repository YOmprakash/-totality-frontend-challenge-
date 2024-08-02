import  { useState ,useContext, useEffect} from 'react';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import RatingDropdown from './RatingDropdown';
import BedroomDropdown from './BedRoomDropdown';

import { CartContext } from '../context/CartContext';

const Search = () => {
  const { data, setData } = useContext(CartContext);
  const [filters, setFilters] = useState({
    city: '',
    price: '',
    rating: '',
    bedrooms: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
 
    setData((prevData) => ({
      ...prevData, // Preserve other data properties
      filters, // Update the filters object within the data state
    }));

  };

  useEffect(() => {
    handleSearch(); 
  }, [filters]);

  const handleSearch = () => {
    const filteredHotels = data.filter((hotel) => {
      return (
        (!filters.city || hotel.city === filters.city) &&
        (!filters.price ||
          (Number(hotel.price) >= Number(filters.price.split('-')[0]) &&
            Number(hotel.price) <= Number(filters.price.split('-')[1]))) &&
        (!filters.rating || hotel.rating >= Number(filters.rating)) &&
        (!filters.bedrooms || hotel.bedrooms === Number(filters.bedrooms))
      );
    });

   setData({...data,  filteredHotels});
  };

  return (
    <div className="bg-[#f5f5f5] border-2 p-4 max-w-[900px] mx-auto">
      <div className="flex gap-4">
        <LocationDropdown onChange={(value) => handleFilterChange('city', value)} />
        <PriceDropdown onChange={(value) => handleFilterChange('price', value)} />
        <RatingDropdown onChange={(value) => handleFilterChange('rating', value)} />
        <BedroomDropdown onChange={(value) => handleFilterChange('bedrooms', value)} />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
