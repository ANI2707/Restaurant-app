import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const dummy = 'Dummy Data';

  const {resId} = useParams();
  // console.log(resId);

  const [showIndex, setShowIndex] = useState(null);

  //Custom hook
  const resInfo=useRestaurantMenu(resId);
  // console.log(resInfo);

  if(resInfo === null ){
    return <Shimmer/>
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
