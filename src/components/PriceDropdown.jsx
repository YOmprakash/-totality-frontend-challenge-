import React from 'react';

const PriceDropdown = ({ onChange }) => {
  const priceRanges = [
    { label: 'Any', value: '' },
    { label: '0 - 10000', value: '0-10000' },
    { label: '10001 - 20000', value: '10001-20000' },
    // ... more price ranges
  ];

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {priceRanges.map((range) => (
        <option key={range.value} value={range.value}>
          {range.label}
        </option>
      ))}
    </select>
  );
};

export default PriceDropdown;
