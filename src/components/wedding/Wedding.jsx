import React from "react";
import "./Wedding.css";
import wedding from "../../assets/wedding.jpg";

const Wedding = () => {
  return (
    <div className="wedding">
      <div className="flex-wedding">
        <div className="wedding-details">
          <h2>
            The Easiest Wedding Celebrate Love, <br/> Together Forever in Style
          </h2>
          <p>
            All the gifts you could want, convinience for you and your guests
            free wedding websites and more.Discover the joy of your wedding day
            with a celebration that reflects your unique love story. From the
            perfect venue to every stunning detail, let us help you create
            unforgettable memories surrounded by family and friends, cherishing
            love and togetherness for a lifetime.
          </p>
          <button>START YOUR REGISTRY</button>
        </div>
        <div className="wedding-details">
          <img src={wedding} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wedding;
