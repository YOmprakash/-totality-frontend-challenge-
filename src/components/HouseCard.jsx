import { Link } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import PeopleIcon from '@mui/icons-material/People';
const HouseCard = ({ house }) => {
  const {
    name,
    id,
    description,
    image,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,

  } = house;

  return (
    <div className="">
    <div className="overflow-hidden inline-block ">
    <img src={image} alt="house"  className="w-full object-cover h-[300px]  rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-500 transition-transform  ease-in-out" />
    </div>
     
      <div className="flex items-center gap-2 p-4">
      <PeopleIcon/>
        <h5 className="text-sm font-light rounded-xl text-[#6b6b6b]">
          2 people
        </h5>
        <BedIcon/>
        <h5 className="text-sm font-light rounded-xl text-[#6b6b6b]">
          {bedrooms} Bedroom
        </h5>
      </div>
      <h3 className="text-[#3f3023] uppercase text-xl font-normal "> {name}</h3>
      <h6 className="text-[#3f3023] uppercase text-xl font-normal "> {name}</h6>
      < hr  className="border-1 w-full "/>
      <div className="flex justify-between mt-2">
      <h2>{price} /night</h2>

      <button className="bg-[#0077b5] text-white px-4 py-2 rounded-lg" onClick={() => (window.location.href = `/house/${id}`)}>
        Book Now
      </button>
      </div>
    </div>
  );
};

export default HouseCard;
