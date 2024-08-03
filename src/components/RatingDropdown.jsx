import React from 'react';

const RatingDropdown = ({ onChange }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
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
