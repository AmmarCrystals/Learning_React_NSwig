import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ResturantMenue = () => {
  const params = useParams();
const [resturant, Setresturant] = useState({})

useEffect (()=>{
getResturantInfo()
},[])

async function getResturantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = data.json()
    console.log(json)
}


  return (
    <>
      <h1>Resturant id : {params.id } </h1>
      <p> {console.log(params.id)}</p> 
    </>
  );
};

export default ResturantMenue;
