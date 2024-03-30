import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //local state variable - super powerful variaable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterOfRestaurants, setFilterOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    console.log("useEffect Called");
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const responce = await data.json();

    // console.log(responce);
    // console.log(responce.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining
    setListOfRestaurants(responce?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterOfRestaurants(responce?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  //normal js variable
  // let listOfRestaurants=[];

  //Normal JS Variable
  // let ListOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "121603",
  //       name: "Kannur Food Point",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 50000,
  //       deliveryTime: 24,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121604",
  //       name: "Dominos",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 50000,
  //       deliveryTime: 24,
  //       avgRating: "4.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121605",
  //       name: "KFC",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 50000,
  //       deliveryTime: 24,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];
  
  return  (
    <div className="body">
      {/* <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div> */}

      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          />
          {/* filter the res cards */}
          <button
            onClick={() => {
              // Search text
              // console.log(searchText);

              const filterRestaurant = ListOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterOfRestaurants(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        {/* filter logic */}
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setFilterOfRestaurants(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}

        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filterOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
      </div>
    </div>
  );
};

export default Body;
