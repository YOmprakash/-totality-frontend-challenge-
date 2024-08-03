
const PriceDropdown = ({ onChange }) => {
  const priceRanges = [
    { label: 'Any', value: '' },
    { label: '0 - 10000', value: '0-10000' },
    { label: '10001 - 20000', value: '10001-20000' },
    { label: '20001 - 30000', value: '20001-30000' },
    { label: '30001 - 40000', value: '30001-40000' },
    { label: '40001 - 50000', value: '40001-50000' },
    { label: '50001 - 60000', value: '50001-60000' },
  ];

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {priceRanges.map((range) => (
        <option className='p-2' key={range.value} value={range.value}>
          {range.label}
        </option>
      ))}
    </select>
  );
};

export default PriceDropdown;
