import Image1 from "../public/men-shirt-1.jpg";
import Image2 from "../public/men-shirt-2.jpg";
import Image3 from "../public/men-pent-1.jpg";
import Image4 from "../public/men-pent-2.jpg";
import Image5 from "../public/women-dresses-1.jpg";
import Image6 from "../public/women-dresses-2.jpg";
import Image7 from "../public/women-skirts-1.jpg";
import Image8 from "../public/women-skirts-2.avif";
export const Header_data = [
  {
    id: 1,
    name: "Clothing",
    children: [
      {
        id: 2,
        name: "Men",
        children: [
          { id: 3, name: "Shirts", link: "/clothing/men/shirts" },
          { id: 4, name: "Pants", link: "/clothing/men/pants" },
        ],
      },
      {
        id: 5,
        name: "Women",
        children: [
          { id: 6, name: "Dresses", link: "/clothing/women/dresses" },
          { id: 7, name: "Skirts", link: "/clothing/women/skirts" },
        ],
      },
    ],
  },
];
export const Men_Shirt_Data = [
  {
    name: "Mens Casual Premium Slim Fit",
    price: "$22.3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image1,
  },
  {
    name: "Mens Casual Slim Fit",
    price: "$15.99",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image2,
  },
];
export const Men_Pent_Data = [
  {
    id: 1173,
    name: "Men's Work Pants | Strauss",
    price: "$15.45",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image3,
  },
  {
    id: 2503,
    name: "Men's Pants",
    price: "$19.65",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image4,
  },
];
export const women_Dresses_Data = [
  {
    id: 1599,
    name: "MBJ Women's Solid Short Sleeve Boat",
    price: "$9.85",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image5,
  },
  {
    id: 2,
    name: "Opna Women's Short Sleeve Moisture",
    price: "$7.95",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image6,
  },
];
export const Women_Skirt_Data = [
  {
    id: 1784,
    name: "Blue Skirt",
    price: "$12.65",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image7,
  },
  {
    id: 23434,
    name: "Brown Short Skirt",
    price: "$29.65",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: Image8,
  },
];
