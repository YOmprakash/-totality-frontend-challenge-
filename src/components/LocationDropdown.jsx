import React from 'react';

const LocationDropdown = ({ onChange }) => {
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Goa']; // Replace with actual city data

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Select City</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default LocationDropdown;
