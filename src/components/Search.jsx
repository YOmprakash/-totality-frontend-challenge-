import LocationDropdown from "./LocationDropdown"
import PriceDropdown from "./PriceDropdown"

const Search = () => {
  return (
    <div className="bg-[#f5f5f5] border-2 p-4 max-w-[900px] mx-auto">
    <LocationDropdown/>
    <PriceDropdown/>
    </div>
  )
}

export default Search