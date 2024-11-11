const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    areaName,
  } = resData?.info;
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        alt="restaurant image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}stars</h4>
      <h4>{areaName}</h4>

      {/* <img 
              className="restro-logo" 
              alt="restaurant image" 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
             
          
              />
              <h3>{resData.info.name}</h3>
              <h4>{resData.info.cuisines.join(", ")}</h4>
              <h4>{resData.info.costForTwo}</h4>
              <h4>{resData.info.avgRatingString}stars</h4>
              <h4>{resData.info.areaName}</h4>
              <h4>{resData.info.sla.deliveryTime}minutes</h4> */}
    </div>
  );
};
export default RestaurantCard;
