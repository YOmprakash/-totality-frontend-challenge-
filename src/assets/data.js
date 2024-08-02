//data.js

import Hotel1 from "./houses/house1.jpeg";
import Hotel2 from "./houses/house2.jpeg";
import Hotel3 from "./houses/house3.jpeg";
import Hotel4 from "./houses/house4.jpeg";
import Hotel5 from "./houses/house5.jpeg";
import Hotel6 from "./houses/house6.jpeg";
import Hotel7 from "./houses/house7.jpeg";
import Hotel8 from "./houses/house8.jpeg";
import Hotel9 from "./houses/house9.jpeg";
import Hotel10 from "./houses/house10.jpeg";
import Hotel11 from "./houses/house11.jpeg";
import Hotel12 from "./houses/house12.jpeg";
import Hotel13 from "./houses/house13.jpeg";
import Hotel14 from "./houses/house14.jpeg";
import Hotel15 from "./houses/house15.jpeg";
import Hotel16 from "./houses/house16.jpeg";
import Hotel17 from "./houses/house17.jpeg";
import Hotel18 from "./houses/house18.jpeg";
import Hotel19 from "./houses/house19.jpg";
import Hotel20 from "./houses/house20.jpg";

export const LINKS = [
  { text: "Home", path: "/" },
  { text: "Properties", path: "properties" },
  { text: "Contact", path: "contact" },
];

export const housesData = [
  {
    id: 1,
    name: "The Royal Palms",
    description: "Luxurious beachfront resort with stunning ocean views and world-class amenities.",
    city: "Goa",
    address: "Baga Beach Road, Baga, Goa",
    bedrooms: "6",
    bathrooms: "3",
    totalPrice: 150000,
    discountPrice: 120000,
    image: Hotel1,
    amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
    rating: 4.9,
},
{
    id: 2,
    name: "Himalayan Retreat",
    description: "Nestled in the Himalayas, offering panoramic mountain views and serene ambiance.",
    city: "Manali",
    address: "Old Manali Road, Manali, Himachal Pradesh",
    bedrooms: "4",
    bathrooms: "2",
    totalPrice: 120000,
    discountPrice: 100000,
    amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
    rating: 4.9,
    image: Hotel2,
    
},
{
  id: 3,
  name: "The Oberoi Rajvilas",
  description: "Experience luxury amidst nature's splendor at this award-winning resort.",
  city: "Jaipur",
  address: "Jaipur-Delhi Highway, Jaipur, Rajasthan",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 30000,
  discountPrice: 25000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.7,
  image: Hotel3
},
{
  id: 4,
  name: "The Leela Palace",
  description: "Indulge in luxury and sophistication in the heart of Bangalore.",
  city: "Bangalore",
  address: "Old Airport Road, Bangalore, Karnataka",
  bedrooms: 3,
  bathrooms: 2,
  totalPrice: 28000,
  discountPrice: 25000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.7,
  image: Hotel4 // Replace with actual image path
},
{
  id: 5,
  name: "The Taj Mahal Palace",
  description: "An iconic landmark offering unparalleled luxury and elegance.",
  city: "Mumbai",
  address: "Apollo Bunder, Colaba, Mumbai, Maharashtra",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 35000,
  discountPrice: 32000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.9,
  image: Hotel5 // Replace with actual image path
},
{
  id: 6,
  name: "The Lalit Great Eastern ",
  description: "Experience the grandeur of colonial India at this heritage hotel.",
  city: "Kolkata",
  address: "1, Shakespeare Sarani, Kolkata, West Bengal",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 25000,
  discountPrice: 22000,
  amenities: ["Spa", "Gym", "Restaurant"],
  rating: 4.6,
  image: Hotel6
},
{
  id: 7,
  name: "The Park ",
  description: "Modern luxury meets urban chic at this stylish hotel.",
  city: "Hyderabad",
  address: "Somajiguda, Hyderabad, Telangana",
  bedrooms: 3,
  bathrooms: 2,
  totalPrice: 22000,
  discountPrice: 19000,
  amenities: ["Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.5,
  image: Hotel7
},
{
  id: 8,
  name: "The St. Regis ",
  description: "Indulge in opulence and sophistication at this iconic landmark.",
  city: "Mumbai",
  address: "Lower Parel, Mumbai, Maharashtra",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 38000,
  discountPrice: 32000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.8,
  image: Hotel8 // Replace with actual image path
},
{
  id: 9,
  name: "The Taj Lake Palace",
  description: "Experience royalty on a floating palace in the heart of Lake Pichola.",
  city: "Udaipur",
  address: "Pichola Lake, Udaipur, Rajasthan",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 40000,
  discountPrice: 35000,
  amenities: ["Spa", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.9,
  image: Hotel9 // Replace with actual image path
},
{
  id: 10,
  name: "The Leela Palace",
  description: "A luxurious retreat overlooking the Bay of Bengal.",
  city: "Chennai",
  address: "Adyar, Chennai, Tamil Nadu",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 32000,
  discountPrice: 28000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.7,
  image: Hotel10 // Replace with actual image path
},
{
  id: 11,
  name: "The Oberoi Amarvilas",
  description: "Experience unparalleled luxury while witnessing the majestic Taj Mahal.",
  city: "Agra",
  address: "Taj Nagar, Agra, Uttar Pradesh",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 35000,
  discountPrice: 30000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.8,
  image: Hotel11 // Replace with actual image path
},
{
  id: 12,
  name: "The Ritz Carlton",
  description: "Indulge in modern luxury with world-class amenities and impeccable service.",
  city: "Bangalore",
  address: "Residency Road, Bangalore, Karnataka",
  bedrooms: 3,
  bathrooms: 2,
  totalPrice: 28000,
  discountPrice: 25000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.6,
  image: Hotel12 // Replace with actual image path
},
{
  id: 13,
  name: "The Taj Falaknuma Palace",
  description: "Experience royal grandeur at this historic palace turned luxury hotel.",
  city: "Hyderabad",
  address: "Falaknuma Palace Road, Hyderabad, Telangana",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 40000,
  discountPrice: 35000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.9,
  image: Hotel13 // Replace with actual image path
},
{
  id: 14,
  name: "The Oberoi Grand",
  description: "A historic landmark offering elegance and comfort in the heart of Kolkata.",
  city: "Kolkata",
  address: "5, Wood Street, Kolkata, West Bengal",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 28000,
  discountPrice: 25000,
  amenities: ["Spa", "Gym", "Restaurant"],
  rating: 4.7,
  image: Hotel14 // Replace with actual image path
},
{
  id: 15,
  name: "The Leela Palace ",
  description: "Experience luxury and sophistication in the garden city of India.",
  city: "Bangalore",
  address: "HAL Old Airport Road, Bangalore, Karnataka",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 32000,
  discountPrice: 28000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.8,
  image:  Hotel15 // Replace with actual image path
},
{
  id: 16,
  name: "The Taj Mahal Palace",
  description: "Indulge in luxury and heritage at this iconic hotel in the heart of the capital.",
  city: "New Delhi",
  address: "Mansingh Road, New Delhi",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 35000,
  discountPrice: 30000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.9,
  image: Hotel16 // Replace with actual image path
},
{
  id: 17,
  name: "The Ritz Carlton",
  description: "Experience world-class luxury with stunning views of the Arabian Sea.",
  city: "Mumbai",
  address: "Worli, Mumbai, Maharashtra",
  bedrooms: 4,
  bathrooms: 3,
  totalPrice: 32000,
  discountPrice: 28000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.7,
  image:  Hotel17 // Replace with actual image path
},
{
  id: 18,
  name: "The Oberoi",
  description: "Modern luxury and comfort in the heart of Gurgaon.",
  city: "Gurgaon",
  address: "Golf Course Road, Gurgaon, Haryana",
  bedrooms: 3,
  bathrooms: 2,
  totalPrice: 25000,
  discountPrice: 22000,
  amenities: ["Gym", "Pool", "Wi-Fi", "Restaurant"],
  rating: 4.6,
  image: Hotel18 // Replace with actual image path
},{
  id: 19,
  name: "Taj Lake Palace",
  description: "Experience royal luxury in a majestic palace on Lake Pichola.",
  city: "Udaipur",
  address: "Pichola Lake, Udaipur, Rajasthan",
  bedrooms: 5,
  bathrooms: 4,
  totalPrice: 40000,
  discountPrice: 35000,
  amenities: ["Spa", "Gym", "Pool", "Wi-Fi", "Restaurant", "Bar"],
  rating: 4.9,
  image: Hotel19 // Replace with actual image path
},
{
  id: 20,
  name: "The Park",
  description: "Stylish and contemporary hotel with a vibrant atmosphere.",
  city: "Bangalore",
  address: "MG Road, Bangalore, Karnataka",
  bedrooms: 3,
  bathrooms: 2,
  totalPrice: 22000,
  discountPrice: 19000,
  amenities: ["Gym", "Pool", "Wi-Fi", "Restaurant", "Bar"],
  rating: 4.5,
  image: Hotel20 // Replace with actual image path
}

];
