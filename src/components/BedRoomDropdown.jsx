import React from 'react';

const BedroomDropdown = ({ onChange }) => {
  const bedrooms = [1, 2, 3, 4, 5];

  return (
    <select onChange={(e) => onChange(e.target.value)}>
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
