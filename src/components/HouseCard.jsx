import { Link } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import PeopleIcon from '@mui/icons-material/People';

const HouseCard = ({ house }) => {
  const {
    name,
    id,
    description,
    image,
    totalPrice,
    country,
    address,
    discountPrice,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="house" className="w-full object-cover h-[200px] cursor-pointer hover:scale-105 transition-transform ease-in-out" />
      <div className="p-4 flex flex-col justify-between h-[250px]">
        <div className="flex items-center gap-2">
          <PeopleIcon fontSize="small" color="primary" />
          <p className="text-gray-500">2 people</p>
          <BedIcon fontSize="small" color="primary" />
          <p className="text-gray-500">{bedrooms} Bedroom</p>
        </div>
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-gray-500">{address}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-400 line-through" >${totalPrice}</span>
          <span className="text-green-500 font-bold">${discountPrice} /night</span>
        </div>
        <Link to={`/house/${id}`} className="block bottom-0 text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
