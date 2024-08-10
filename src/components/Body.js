import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {

    // Local state variable- super powerful variable
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
            if (!data.ok) {
                throw new Error('Network response was not ok');
            }
    
            const json = await data.json();
            console.log(json);
            //optional chaining
            setListOfRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            // Process the JSON data here
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    
    
    return listOfRestaurents.length ===0 ? (
     <Shimmer /> 
    ) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        // filter logic
                        const filteredList = listOfRestaurents.filter(
                            (res) => res.info.avgRating > 4);
                        setListOfRestaurents(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurents.map((restraurent) => (
                        <RestaurentCard key={restraurent.info.id} resData={restraurent} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
