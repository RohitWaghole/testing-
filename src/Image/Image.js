import React from "react";
import "./Image.css";
const Image = ({ images }) => {
  return (
    <div className="product-container">
      {images.map((image, index) => (
        <div>
          <img className="img" key={index} src={image.src} alt={image.alt} />
          <div className="info">
            <h3>{image.product}</h3>
            <h4>{image.price}</h4>
            <h4>{image.desc}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Image;
