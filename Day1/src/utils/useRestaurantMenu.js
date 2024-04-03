import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo]=useState(null);
    //fetch Data

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async  () =>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)

        const json=await data.json();
        console.log(json);
        setResInfo(json);

    }

    return resInfo;
}

export default useRestaurantMenu;