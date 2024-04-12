import ResturantCard from "./Resturantcard";
// import { restaurantList } from "./Constant";
import { useState, useContext } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [allRestorant, setAllRestorant] = useState([]);
  const [Resturant, SetResturant] = useState([]);
  const [SearchText, SetSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    let convert =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    SetResturant(convert);
    setAllRestorant(convert);
    console.log(convert);
  }

const {user,setUser} = useContext(UserContext)

  return (
    <>
      <input
        type="text"
        className="border-2 rounded-lg m-2"
        value={SearchText}
        onChange={(e) => {
          SetSearchText(e.target.value);
        }}
        placeholder="Search"
      />
      <button
        className="rounded-lg bg-yellow-200 mx-2 p-1"
        onClick={() => {
          const data = filterData(SearchText, allRestorant);
          SetResturant(data);
        }}
      >
        search
      </button>

<input type="text" value={user.name} onChange={
  e => setUser({
    name: e.target.value,
    email: "zooo@gmail.com"
  })
} />


      {Resturant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mx-40 my-10">
          {Resturant.map((resturant) => {
            return (
              <>
                <Link to={"/resturant/" + resturant?.info?.id}>
                  <ResturantCard {...resturant?.info} />
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
