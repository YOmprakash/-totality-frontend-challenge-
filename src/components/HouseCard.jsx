
const HouseCard = ({ house }) => {
    const {name, description,image,country,address,bedrooms,bathrooms,surface,price} = house
 
  return (
    <div className="shadow-2xl rounded-lg m">
     
      <img src={image} alt="house" className="object-contain " />
      <div className="flex items-center gap-2 p-4">
        <h1 className="text-white bg-green-500 px-1 text-sm rounded-md">HOUSE</h1>
        <h1 className="text-white bg-purple-500 px-1 text-sm rounded-md">{country}</h1>
      </div>
      <h3> {address}</h3>
      <div className="flex items-center gap-4">
        <div>
        <p>{bedrooms}</p>
        </div>
        <div>
        <p>{bathrooms}</p>
        </div>
        <div>
        <p>{surface}</p>
        </div>
      </div>
      <h2>{price}</h2>
      
    </div>
  )
}

export default HouseCard