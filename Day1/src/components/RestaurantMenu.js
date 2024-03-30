import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const info = await response.json();
    console.log(info);
    setResInfo(info);
  };

  if(resInfo === null ){
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")} -  {costForTwoMessage} </h3>
      <h4>start {avgRating}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id} >{item?.card?.info?.name} -  Rs. {item?.card?.info?.price/100}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
