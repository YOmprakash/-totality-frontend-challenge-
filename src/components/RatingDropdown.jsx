import React from 'react';

const RatingDropdown = ({ onChange }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Rating</option>
      {ratings.map((rating) => (
        <option key={rating} value={rating}>
          {rating}
        </option>
      ))}
    </select>
  );
};

export default RatingDropdown;
