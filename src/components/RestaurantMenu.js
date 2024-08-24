// import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
// import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
   

    const {resId} = useParams();
    
    const resInfo = useRestaurentMenu(resId);
   
    if(resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;
    // Destructure only after confirming the object exists
    

    const{itemCards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.
    REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs. "} {item.card.info.price/100}
                </li>)}
                
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
