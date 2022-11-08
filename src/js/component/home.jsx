import React, { useState } from "react";

//create your first component
const Home = () => {
  const [selectedcolor, setSelectedColor] = useState("");
  return (
    <div className="center">
      <div className="wire"> </div>
      <div className="body">
        <div
          onClick={() => setSelectedColor("red")}
          className={"red light " + (selectedcolor === "red" ? "ambient" : "")}
        ></div>

        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "yellow light " + (selectedcolor === "yellow" ? "ambient" : "")
          }
        ></div>

        <div
          onClick={() => setSelectedColor("green")}
          className={
            "green light " + (selectedcolor === "green" ? "ambient" : "")
          }
        ></div>

        <button
          onClick={() => setSelectedColor("purple")}
          className={
            " " + (selectedcolor === "purple" ? "light purple ambient box2" : "")
          }
        >Click to see Purple!!!</button>
      </div>


	  <div className="sign"><strong>W 49th St.</strong></div>

    </div>
  );
};

export default Home;
