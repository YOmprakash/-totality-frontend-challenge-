import React from 'react';

const LocationDropdown = ({ onChange }) => {
  const cities = ['Mumbai',  'Bangalore','Manali', 'Goa','Jaipur','Kolkata','Udaipur',  'Hyderabad', 'Udaipur', 'Chennai', 'Agra',
    'New Delhi',
    'Gurgaon']; 

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
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
