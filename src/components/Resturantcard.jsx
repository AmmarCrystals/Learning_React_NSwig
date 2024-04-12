import { IMG_CONST_URL } from "./Constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  const {user} = useContext(UserContext)
  return (
    <div className="w-60">
      <img
        className="rounded-3xl w-full"
        src={IMG_CONST_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className="font-semibold">{name}</h2>
      <h3 className="break-words">{cuisines}</h3>
      <h4>{avgRating}</h4>
      <p>{user.name}</p>
    </div>
  );
};

export default ResturantCard;
