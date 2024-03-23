import { useState, useEffect } from "react";
import { MENU_URL } from "./Constant";

const useResturant = (foo) => {
  const [resturant, Setresturant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(MENU_URL + foo);
    const json = await data?.json();

    const finaldata = json?.data?.cards[0]?.card?.card?.info;

    Setresturant(finaldata);
    console.log(finaldata)
  }
};

export default useResturant;
