import React from "react";
import "./GetStarted.css";
import bt from "../../assets/bt.avif";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="flex-started">
        <div className="flex-details">
          <div className="flex-img">
            <img src={bt} alt="" />
          </div>
        </div>
        <div className="flex-details">
          <div className="right-details">
          <h2>
            Create a <span style={{fontWeight:"bolder", borderBottom:"3px solid black"}}>Free</span> <br /> Wedding Website, Too
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit
            cumque, cupiditate est cum modi quo, sit asperiores a quam ea
            dolores explicabo molestiae nulla dolor doloremque eaque alias
            aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga, error.
          </p>
          <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
