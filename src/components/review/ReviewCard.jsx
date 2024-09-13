import React from "react";
import "./ReviewCard.css";
import logo from "../../assets/logo.jpg";
import newss from "../../assets/new.jpg";
import bt from "../../assets/bt.avif";

const ReviewCard = () => {
  return (
    <div className="review">
      <div className="review-heading">
        <h1>Rated 5 Star On Google</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed
          incidunt inventore.
        </p>
      </div>
      <div className="flex-review">
        <div className="review-details">
          <img src={bt} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            ipsam. At fuga nesciunt, impedit distinctio nihil tenetur ullam aut
            eveniet.
          </p>
          <span style={{ color: "yellowgreen" }}>★★★★★</span>
          <h6>Jhone Smith</h6>
        </div>
        <div className="review-details">
          <img src={newss} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            ipsam. At fuga nesciunt, impedit distinctio nihil tenetur ullam aut
            eveniet.
          </p>
          <span style={{ color: "yellowgreen" }}>★★★★★</span>
          <h6>Alaxander Deo</h6>
        </div>
        <div className="review-details">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            ipsam. At fuga nesciunt, impedit distinctio nihil tenetur ullam aut
            eveniet.
          </p>
          <span style={{ color: "yellowgreen" }}>★★★★★</span>
          <h6>Jhone Deo</h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
