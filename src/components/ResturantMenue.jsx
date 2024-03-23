// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "./Constant";
// import {Constant} from "./Constant"
import useResturant from "./useResturant"
const ResturantMenue = () => {
  const params = useParams();
  const idnumber = params.id;
  const foo = idnumber.substring(1);

  const resturant = useResturant(foo)

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
