import React from "react";
import "./Sale.css";
import gift from "../../assets/gift.jpg";
import truck from "../../assets/truck.jpg";
import off from "../../assets/off.png";
import unique from "../../assets/unique.jpg";

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale-flex">
        <div className="sale-details">
          <img src={gift} alt="" />
          <h6>So Easy To use</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            modi aliquam nesciunt architecto excepturi ducimus voluptas delectus
            corrupti quasi eaque,
          </p>
        </div>
        <div className="sale-details">
          <img src={unique} alt="" />
          <h6>Our Store Has It All</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid
            veritatis cumque nisi totam fugit unde praesentium eius reiciendis
            suscipit! Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="sale-details">
          <img src={off} alt="" />
          <h6>20% OFF Post-Wedding</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid
            veritatis cumque nisi totam fugit unde praesentium eius reiciendis
            suscipit! Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="sale-details">
          <img src={truck} alt="" />
          <h6>Free Shipping And Return</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid
            veritatis cumque nisi totam fugit unde praesentium eius reiciendis
            suscipit! Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
