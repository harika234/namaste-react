import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // Local state variable- super powerful variable
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchText,setSearchText] = useState("");
    const[filteredRestaurant,setFilteredRestaurant] = useState([]);
    // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
    console.log("body rendered");

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
            setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            // Process the JSON data here
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like you're offline!! Please check your internet connection.</h1>
        
    }

    
    return listOfRestaurents.length ===0 ? (
     <Shimmer /> 
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type = "text"  
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={()=> {
                        // filter logic
                        console.log(searchText);
                        const filteredRestaurants = listOfRestaurents.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            
                            setFilteredRestaurant(filteredRestaurants);
                    }}>
                        Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        // filter logic
                        const filteredList = listOfRestaurents.filter(
                            (res) => res.info.avgRating > 4.5);
                        setListOfRestaurents(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restraurent) => (
                        <Link 
                        key = {restraurent.info.id}
                        to={"/restaurants/" + restraurent.info.id}><RestaurentCard key={restraurent.info.id} resData={restraurent} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
