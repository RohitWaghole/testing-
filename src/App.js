import React from "react";
import Image from "./Image/Image";
const App = () => {
  const images = [
    {
      src: "https://m.media-amazon.com/images/I/41IcuNkyrdL._SX300_SY300_QL70_FMwebp_.jpg",
      alt: "Product Image 1",
      product: "Mobile",
      price: "$300",
      desc: "Samsung M04",
    },
    {
      src: "https://m.media-amazon.com/images/I/718XDEWTPIL._UL1500_.jpg",
      alt: "Product Image 2",
      product: "Watch",
      price: "$120",
      desc: "Redux Watch",
    },
    {
      src: "https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg",
      alt: "Product Image 3",
      product: "Earphones",
      price: "$70",
      desc: "Boat earphones",
    },
    {
      src: "https://m.media-amazon.com/images/I/51tS-cfYoXL._SX679_.jpg",
      alt: "Product Image 4",
      product: "Charger",
      price: "$50",
      desc: "Apple charger",
    },
    {
      src: "https://m.media-amazon.com/images/I/61nSicoo7dL._SX679_.jpg",
      alt: "Product Image 5",
      product: "Skates",
      price: "$1000",
      desc: "Roller Skates",
    },
  ];

  return (
    <div>
      <Image images={images} />
    </div>
  );
};

export default App;
