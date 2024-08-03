import { useState, useContext, useEffect } from 'react';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import RatingDropdown from './RatingDropdown';
import BedroomDropdown from './BedRoomDropdown';

import { CartContext } from '../context/CartContext';

const Search = () => {
  const { data, setFilteredHotels } = useContext(CartContext);
  const [filters, setFilters] = useState({
    city: '',
    price: '',
    rating: '',
    bedrooms: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      price: '',
      rating: '',
      bedrooms: '',
    });
  };

  useEffect(() => {
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

    setFilteredHotels(filteredHotels);
  }, [filters, data, setFilteredHotels]);

  return (
    <div className="bg-gray-100 border-2 p-4 lg:max-w-4xl mx-auto my-4 rounded-md">
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="w-full sm:w-1/2 md:w-1/5">
        <LocationDropdown onChange={(value) => handleFilterChange('city', value)} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5">
        <PriceDropdown onChange={(value) => handleFilterChange('price', value)} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5">
        <RatingDropdown onChange={(value) => handleFilterChange('rating', value)} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5">
        <BedroomDropdown onChange={(value) => handleFilterChange('bedrooms', value)} />
      </div>
    </div>
    <div className="flex justify-end">
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Clear Filters
      </button>
    </div>
  </div>
  );
};

export default Search;
