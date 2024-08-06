import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
const Body = () => {

    let listOfRestaurents = [
        {
            data: {
            "id": "92292",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_92292.JPG",
            "locality": "KIIT Square",
            "areaName": "Patia Village",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 3.8 ,
            "deliveryTime": 17,       
            },
        },

        {
            data: {
            "id": "92295",
            "name": "Dominos King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_92292.JPG",
            "locality": "KIIT Square",
            "areaName": "Patia Village",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 4.5 ,
            "deliveryTime": 17,       
            },
        },

        
    ];
    return (
      <div className="body">
        <div className="filter" >
            <button className="filter-btn" 
            onClick={()=>{
                // filter logic
                listOfRestaurents = listOfRestaurents.filter(
                    (res)=> res.data.avgRating > 4)
            }
            }>
                Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurents.map((restraurent) => (
                   <RestaurentCard key={restraurent.data.id} resData={restraurent}/>
                )) 
            }
            
            
        </div>
      </div>
    )
  }

  export default Body;