import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
            className="logo"
            src = "https://cdn.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.webp"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  ) 
}

const RestaurentCard = (props) => {
  const {resData} = props;

  const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime}  = resData?.info;
  return (
    <div className="res-card" 
    style = {{backgroundColor: "#f0f0f0"}}>  
      <img
      className="res-logo"
        alt="res-logo"
        src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  )
}

const resList = [
  {
  "info": {
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
  "avgRating": 4.6,
  "parentId": "166",
  "avgRatingString": "4.6",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 17,
  "lastMileTravel": 0.4,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹149"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.4",
  "ratingCount": "1K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/burger-king-kiit-square-patia-village-bhubaneswar-92292",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "693105",
  "name": "La Pino'z Pizza",
  "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
  "locality": "PS-NEW CAPITAL",
  "areaName": "New Capital Patia",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Pastas",
  "Mexican",
  "Desserts"
  ],
  "avgRating": 4.3,
  "parentId": "4961",
  "avgRatingString": "4.3",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 1.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-ps-new-capital-new-capital-patia-bhubaneswar-693105",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "103530",
  "name": "The Belgian Waffle Co.",
  "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
  "locality": "Patia",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Waffle",
  "Desserts",
  "Ice Cream",
  "Beverages"
  ],
  "avgRating": 4.7,
  "parentId": "2233",
  "avgRatingString": "4.7",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 29,
  "lastMileTravel": 1.6,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "1.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "Ratnesh_Badges/test2.png",
  "shortDescription": "Perfect ice cream delivery",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "Ratnesh_Badges/test2.png",
  "shortDescription": "Perfect ice cream delivery"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.3",
  "ratingCount": "20+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-patia-bhubaneswar-103530",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "96571",
  "name": "Subway",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/f661a2a9-6133-417f-b195-d5dffa4d5ead_96571.JPG",
  "locality": "Sahid Nagar",
  "areaName": "Sahid Nagar",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Healthy Food",
  "Salads",
  "Snacks",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "2",
  "avgRatingString": "4.3",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 59,
  "lastMileTravel": 10.7,
  "serviceability": "SERVICEABLE",
  "slaString": "55-60 mins",
  "lastMileTravelString": "10.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 22:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "3.4",
  "ratingCount": "100+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/subway-sahid-nagar-bhubaneswar-96571",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "126295",
  "name": "UBQ by Barbeque Nation",
  "cloudinaryImageId": "dipwfklhiogbgcnoa0vj",
  "locality": "Gajapathi Nagar",
  "areaName": "Chandrasekharpur",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "North Indian",
  "Barbecue",
  "Biryani",
  "Kebabs",
  "Mughlai",
  "Desserts"
  ],
  "avgRating": 4.2,
  "parentId": "10804",
  "avgRatingString": "4.2",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 46,
  "lastMileTravel": 4.9,
  "serviceability": "SERVICEABLE",
  "slaString": "45-50 mins",
  "lastMileTravelString": "4.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-gajapathi-nagar-chandrasekharpur-bhubaneswar-126295",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "71210",
  "name": "Hot Chilly Fast Food & Restaurant",
  "cloudinaryImageId": "mvohgoovez9vuuuwacgq",
  "locality": "Magnetic Chowk",
  "areaName": "KIIT Square ",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Chinese",
  "Biryani",
  "Kebabs",
  "Fast Food",
  "Indian"
  ],
  "avgRating": 4.1,
  "parentId": "453356",
  "avgRatingString": "4.1",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 0.5,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "0.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
  "description": "OnlyOnSwiggy"
  }
  ]
  },
  "select": true,
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "OnlyOnSwiggy",
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹99"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/hot-chilly-fast-food-and-restaurant-magnetic-chowk-kiit-square-bhubaneswar-71210",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "187738",
  "name": "hotel Toshali",
  "cloudinaryImageId": "qhep96bo9cw7zskizcr0",
  "locality": "Patia",
  "areaName": "Patia",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Chinese",
  "Indian",
  "Thalis"
  ],
  "avgRating": 4.3,
  "parentId": "103111",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 36,
  "lastMileTravel": 2.7,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "2.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹129"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.1",
  "ratingCount": "500+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/hotel-toshali-patia-bhubaneswar-187738",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "446803",
  "name": "LunchBox - Meals and Thalis",
  "cloudinaryImageId": "mplyl3gurmwkvaz1div6",
  "locality": "Technology Corridor Rd",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Biryani",
  "North Indian",
  "Punjabi",
  "Healthy Food",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.5,
  "parentId": "4925",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 32,
  "lastMileTravel": 4.7,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:59:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹159"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-technology-corridor-rd-patia-bhubaneswar-446803",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "446804",
  "name": "The Good Bowl",
  "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
  "locality": "Technology Corridor Rd",
  "areaName": "Patia",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Biryani",
  "North Indian",
  "Pastas",
  "Punjabi",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.6,
  "parentId": "7918",
  "avgRatingString": "4.6",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 29,
  "lastMileTravel": 4.7,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "4.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:59:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/the-good-bowl-technology-corridor-rd-patia-bhubaneswar-446804",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "237586",
  "name": "FreshBox",
  "cloudinaryImageId": "hetgepazucywarpwk9mj",
  "locality": "Mother Complex",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Biryani",
  "Indian",
  "Tandoor",
  "Chinese",
  "Mughlai",
  "Beverages",
  "Desserts",
  "Tibetan"
  ],
  "avgRating": 4.4,
  "parentId": "83933",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 0.9,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 15:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/freshbox-mother-complex-patia-bhubaneswar-237586",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "71240",
  "name": "Sardar Ji Restaurant",
  "cloudinaryImageId": "vtesuhqod65dcc2iyz2a",
  "locality": "Kiit Road",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Indian",
  "Biryani"
  ],
  "avgRating": 4.3,
  "parentId": "178251",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 1.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/sardar-ji-restaurant-kiit-road-patia-bhubaneswar-71240",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "72589",
  "name": "Jugaad Jn",
  "cloudinaryImageId": "fq1uss75jajmt1oueyla",
  "locality": "Patia",
  "areaName": "Patia",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Snacks",
  "Beverages",
  "Desserts",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "9963",
  "avgRatingString": "4.5",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 1.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 22:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
  "description": "Delivery!"
  },
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
  }
  },
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹109"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.2",
  "ratingCount": "1K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/jugaad-jn-patia-bhubaneswar-72589",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "515797",
  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/eb7f4b65-43b8-47a2-af88-6350fbe9fcd2_515797.JPG",
  "locality": "Station Road",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream",
  "Ice Cream Cakes"
  ],
  "avgRating": 4.7,
  "veg": true,
  "parentId": "582",
  "avgRatingString": "4.7",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 17,
  "lastMileTravel": 0.5,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
  "description": "Delivery!"
  },
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
  }
  },
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-station-road-patia-bhubaneswar-515797",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "71131",
  "name": "Biriyani Box",
  "cloudinaryImageId": "qmr0hzgrzn59dkddkpvj",
  "locality": "Patia",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Biryani",
  "Kebabs",
  "Desserts",
  "Indian"
  ],
  "avgRating": 4.4,
  "parentId": "7279",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 29,
  "lastMileTravel": 1.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "1.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 00:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Biryani.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Biryani.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹99"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.0",
  "ratingCount": "1K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/biriyani-box-patia-bhubaneswar-71131",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "74269",
  "name": "GreenChillyz",
  "cloudinaryImageId": "gcquif3ytdij3xikweyr",
  "locality": "Patia",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Indian",
  "Chinese"
  ],
  "avgRating": 4.4,
  "parentId": "399293",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 1.7,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "1.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 22:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Rolls.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Rolls.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹40"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "3.9",
  "ratingCount": "1K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/greenchillyz-patia-bhubaneswar-74269",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "474578",
  "name": "KARIM'S- Original from Jama Masjid Delhi- 6",
  "cloudinaryImageId": "1e31773f6fe062816005da6ba8ba6b05",
  "locality": "Kiit Road",
  "areaName": "Patia",
  "costForTwo": "₹700 for two",
  "cuisines": [
  "Mughlai",
  "Kebabs",
  "Biryani",
  "Barbecue"
  ],
  "avgRating": 4.6,
  "parentId": "284854",
  "avgRatingString": "4.6",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 1.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 16:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Gourmet",
  "imageId": "newg.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "FREE ITEM"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/karims-original-from-jama-masjid-delhi-6-kiit-road-patia-bhubaneswar-474578",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "446796",
  "name": "Faasos - Wraps, Rolls & Shawarma",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/c12a8911-b94e-4e1a-b714-f767e6e5bd8c_446796.JPG",
  "locality": "Technology Corridor Rd",
  "areaName": "Patia",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Kebabs",
  "Fast Food",
  "Snacks",
  "American",
  "Healthy Food",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.5,
  "parentId": "21809",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 29,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-04 23:59:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹129"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-technology-corridor-rd-patia-bhubaneswar-446796",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "338648",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_338648.JPG",
  "locality": "Chandaka Industrial Area",
  "areaName": "Patia",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Fast Food",
  "Rolls & Wraps"
  ],
  "avgRating": 4.4,
  "parentId": "547",
  "avgRatingString": "4.4",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.3,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.3 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kfc-chandaka-industrial-area-patia-bhubaneswar-338648",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "621140",
  "name": "McDonald's",
  "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
  "locality": "Chandresekkarpur",
  "areaName": "Chandrasekharpur",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "American",
  "Fast Food"
  ],
  "avgRating": 4.6,
  "parentId": "630",
  "avgRatingString": "4.6",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 1.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹49"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/mcdonalds-chandresekkarpur-chandrasekharpur-bhubaneswar-621140",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "413323",
  "name": "Grameen Kulfi",
  "cloudinaryImageId": "glrtgjd48jaui5twlxfo",
  "locality": "Infosys Road",
  "areaName": "Patia",
  "costForTwo": "₹120 for two",
  "cuisines": [
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.8,
  "veg": true,
  "parentId": "12175",
  "avgRatingString": "4.8",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-08-05 00:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹99"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/grameen-kulfi-infosys-road-patia-bhubaneswar-413323",
  "type": "WEBLINK"
  }
  }
  ]



const Body = () => {
  return (
    <div className="body">
      <div className="Search" >
        Search
      </div>
      <div className="res-container">
          {
              resList.map((restraurent) => (
                 <RestaurentCard key={restraurent.info.id} resData={restraurent}/>
              )) 
          }
          
          
      </div>
    </div>
  )
}





const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
