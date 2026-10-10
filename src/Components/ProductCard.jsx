import React from "react";
// import PropTypes from "prop-types";
import PlantImg from "../assets/plant1.png";

const ProductCard = (props) => {

  const product = props.product

  const imgStyle = {
    height:"200px"
  }

  return (
    <>
      <div className="card flex flex-col bg-white rounded-50 w-85 shadow-[0px_0px_8px_rgba(0,0,0,0.3)] rounded-2xl p-5 gap-2">
        <img style={imgStyle} className="rounded-xl" src={`http://localhost:8085${product.img}`} alt="plant1" />
        <div className="flex flex-row justify-between gap-40 ">
          <p className="bg-[#E8F0E7] px-2 py-1 rounded-2xl font-poppins">
            {product.placement}
          </p>
          <h2 className="card-font font-bold text-xl text-[#1C3A2E] font-poppins ">
           ₹{product.price}
          </h2>
        </div>

        <h2 className="text-2xl font-kalnia text-[#1C3A2E] text-2xl font-medium ">
          {product.name}
        </h2>
        <p className="card-font font-poppins text-xs text-[#747474]">
          {product.description}
        </p>
        <button className="px-1 py-2 bg-[#1C3A2E] rounded-xl text-white font-poppins font-bold">
          Add to cart
        </button>
      </div>
    </>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
