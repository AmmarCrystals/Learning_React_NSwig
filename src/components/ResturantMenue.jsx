import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {Constant} from "./Constant"
const ResturantMenue = () => {
  const params = useParams();
  const idnumber = params.id;
  const foo = idnumber.substring(1);

  const [resturant, Setresturant] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2812547&lng=73.0482912&restaurantId=" + foo
    );
    const json = await data?.json();

    const finaldata = json?.data?.cards[0]?.card?.card?.info
    // const finaldata = json.data?.cards[2]?.card?.card?.info;

    Setresturant(finaldata);
  }
  return (
    <>
      <p>{foo}</p>
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            resturant.cloudinaryImageId
          }
          alt=""
        />
        <h1>{resturant.name}</h1>

        <p>{resturant.city}</p>
        <p>{resturant.feeDetails?.restaurantId}</p>
        <p>{resturant.avgRating}</p>
      </div>
    </>
  );
};

export default ResturantMenue;
