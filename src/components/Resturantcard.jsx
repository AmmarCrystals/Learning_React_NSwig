import { IMG_CONST_URL } from "./Constant";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        className="img-burger"
        src={IMG_CONST_URL + cloudinaryImageId}
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
