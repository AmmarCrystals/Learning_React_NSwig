import ResturantCard from "./Resturantcard";
// import { restaurantList } from "./Constant";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(SearchText, Resturant) {
  const filterDatav = Resturant.filter((Resturant) =>
    Resturant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
  );
  // console.log(filterDatav);
  return filterDatav;
}

const Body = () => {
  const [allRestorant, setAllRestorant] = useState([]);
  const [Resturant, SetResturant] = useState([]);
  const [SearchText, SetSearchText] = useState("");
  // console.log(Resturant[0]?.info);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let convert =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    SetResturant(convert);
    setAllRestorant(convert);
  }

  return (
    <>
      <div className="search_box"></div>
      <input
        type="text"
        value={SearchText}
        onChange={(e) => {
          SetSearchText(e.target.value);
        }}
        placeholder="Search"
      />
      <button
        onClick={() => {
          const data = filterData(SearchText, allRestorant );
          SetResturant(data);
        }}
      >
        search
      </button>
      {Resturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="Cards">
          {Resturant.map((resturant) => {
            return (
              <ResturantCard {...resturant.info} key={resturant.info.id} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
