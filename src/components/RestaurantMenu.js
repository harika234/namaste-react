import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(params);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            (MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER")
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    // Check if the nested object exists before destructuring
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

    // If restaurantInfo is not available, return the Shimmer component
    if (!restaurantInfo) {
        return <Shimmer />;
    }

    // Destructure only after confirming the object exists
    const { name, cuisines, costForTwoMessage } = restaurantInfo;

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
