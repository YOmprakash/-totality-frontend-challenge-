import React from 'react';

const BedroomDropdown = ({ onChange }) => {
  const bedrooms = [1, 2, 3, 4, 5];

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Bedrooms</option>
      {bedrooms.map((bedroom) => (
        <option key={bedroom} value={bedroom}>
          {bedroom}
        </option>
      ))}
    </select>
  );
};

export default BedroomDropdown;
