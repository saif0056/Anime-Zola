import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import Wedding from "../wedding/Wedding";
import Sale from "../sale/Sale";
import Card from "../cards/Card";
import ReviewCard from "../review/ReviewCard";
import GetStarted from "../getstarted/GetStarted";
import Crew from "../creww/Crew";
import LastDiv from "../lastidv/LastDiv";
import Footer from "../footer/Footer";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="flex-header">
          <div className="header-content">
            <img src={logo} alt="" />
            <h3>Anime Zola</h3>
          </div>
          <div className="header-content">
            <p>Log In</p>
            <button>START YOUR REGISTRY</button>
          </div>
        </div>
      </div>
      <div className="header-sale">
        <div className="header-sale-details">
          <p>
            <span>GET $25 </span> to spend at anime zola PLUS{" "}
            <span>20% OFF</span> post-wedding when you sign up today
          </p>
        </div>
      </div>
      <Wedding />
      <Sale />
      <Card />
      <ReviewCard />
      <GetStarted />
      <Crew />
      <LastDiv />
      <Footer />
    </>
  );
};

export default Header;
