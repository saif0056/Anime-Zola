import React from "react";
import "./Crew.css";
import truck from "../../assets/truck.jpg";
import bt from "../../assets/bt.avif";
import newss from "../../assets/new.jpg";
import remote from "../../assets/remote.jpg";
const Crew = () => {
  return (
    <div className="crew">
      <div className="crew-heading">
        <h1>Make It Easy For Your Whole Crew</h1>
      </div>
      <div className="flex-crew">
        <div className="crew-details">
          <img src={truck} alt="" />
          <h5>Free Shipping And Returns</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="crew-details">
          <img src={bt} alt="" />
          <h5>Smarter Exchange</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="crew-details">
          <img src={newss} alt="" />
          <h5>Price Matching</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex-crew">
        <div className="crew-details">
          <img src={remote} alt="" />
          <h5>Lowest Cash Fund Fee</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="crew-details">
          <img src={bt} alt="" />
          <h5>Free Thank-You Note Manager</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="crew-details">
          <img src={newss} alt="" />
          <h5>Top-Notch Customer Service</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis? Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
