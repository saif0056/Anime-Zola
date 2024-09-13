import React from "react";
import "./Card.css";
import food from "../../assets/food.jpg";
import remote from "../../assets/remote.jpg";
import newss from "../../assets/new.jpg";
import cup from "../../assets/bt.avif";

const Card = () => {
  return (
    <div className="card">
      <div className="card-heading">
        <h1>
          Brands <span>Everyone</span> Will Love
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias,
          saepe molestiae voluptates sunt voluptatibus voluptas atque iste et
          est? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-card">
        <div className="card-details">
          <img src={cup} alt="" />
          <h6>Cuisinart</h6>
        </div>
        <div className="card-details">
          <img src={food} alt="" />
          <h6>Kitchen Art</h6>
        </div>
        <div className="card-details">
          <img src={newss} alt="" />
          <h6>Create Barrel</h6>
        </div>
        <div className="card-details">
          <img src={remote} alt="" />
          <h6>Anime Class</h6>
        </div>
      </div>
      <div className="card-button">
        <button>START YOUR REGISTRY</button>
      </div>
    </div>
  );
};

export default Card;
