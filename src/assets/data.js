//data.js

// import house images
import House1 from "./houses/house1.jpeg";
import House2 from "./houses/house2.jpeg";
import House3 from "./houses/house3.jpeg";
import House4 from "./houses/house4.jpeg";
import House5 from "./houses/house5.jpeg";
import House6 from "./houses/house6.jpeg";
import House7 from "./houses/house7.jpeg";
import House8 from "./houses/house8.jpeg";
import House9 from "./houses/house9.jpeg";
import House10 from "./houses/house10.jpeg";
import House11 from "./houses/house11.jpeg";
import House12 from "./houses/house12.jpeg";
import House17 from "./houses/house17.jpeg";
import House13 from "./houses/house14.jpeg";
import House14 from "./houses/house15.jpeg";
import House15 from "./houses/house16.jpeg";
import House16 from "./houses/house17.jpeg";
// import apartments images
import Apartment1 from "./apartments/a1.png";
import Apartment2 from "./apartments/a2.png";
import Apartment3 from "./apartments/a3.png";
import Apartment4 from "./apartments/a4.png";
import Apartment5 from "./apartments/a5.png";
import Apartment6 from "./apartments/a6.png";


// import agents images
import Agent1 from "./agents/agent1.png";
import Agent2 from "./agents/agent2.png";
import Agent3 from "./agents/agent3.png";
import Agent4 from "./agents/agent4.png";
import Agent5 from "./agents/agent5.png";
import Agent6 from "./agents/agent6.png";
import Agent7 from "./agents/agent7.png";
import Agent8 from "./agents/agent8.png";
import Agent9 from "./agents/agent9.png";
import Agent10 from "./agents/agent10.png";
import Agent11 from "./agents/agent11.png";
import Agent12 from "./agents/agent12.png";

export const LINKS = [
  { text: "Home", targetId: "home" },
  { text: "Properties", targetId: "properties" },
  { text: "Contact", targetId: "contact" },
];

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
    
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
    
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House3,
   
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House4,
    
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House5,

    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House6,
 
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartament",
    name: "Apartament 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House7,
    
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartament",
    name: "Apartament 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House8,
    
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartament",
    name: "Apartament 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House9,
   
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House10,
  
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: House10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House11,
  
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House13,
    
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House10,
  
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House11,
  
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House12,
    
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartament",
    name: "Apartament 16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment4,

    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartament",
    name: "Apartament 17",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment5,
    
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartament",
    name: "Apartament 18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment6,
    
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
