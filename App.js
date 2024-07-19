import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JN5RzIbisp4jK2NiDOh0znnuWWy_j4hSCU2-lExBV-4UwkdX8vCR4JsZOw&s"/>
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
};

const styleCard = {
    backgroundColor:"#f0f0f0",
};

const RestaurentCard = (props) => {
    const {resData} = props;

    const {name,cuisines} = resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="res-logo"
            alt = "res-logo" 
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg"/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>4.4 stars</h4>
            <h4>34 minutes</h4>
        </div>
    )
}


const resList= [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas","burger","sandwitch"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "dominos-pizza-majura-nondh-test_surat",
          city: "surat",
        },
        cityState: "21",
        address:
          "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        parentId: 2456,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "74453",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          lastMileTravel: 0,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },{
        type: "restaurant",
        data: {
          type: "F",
          id: "74453",
          name: "Domino's Pizza",
          uuid: "87727dbd-7f2b-4857-9763-359624165845",
          city: "21",
          area: "Athwa",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["noodles","eggroll","babycorn"],
          tags: [],
          costForTwo: 40000,
          costForTwoString: "₹400 FOR TWO",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          slaString: "45 MINS",
          lastMileTravel: 0,
          slugs: {
            restaurant: "dominos-pizza-majura-nondh-test_surat",
            city: "surat",
          },
          cityState: "21",
          address:
            "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
          locality: "Bhatar Road",
          parentId: 2456,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
              {
                meta: "Free Delivery",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          chain: [],
          feeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
          },
          lastMileTravelString: "2.1 kms",
          hasSurge: false,
          sla: {
            restaurantId: "74453",
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            lastMileTravel: 0,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
          },
          promoted: false,
          avgRating: "4.0",
          totalRatings: 1000,
          new: false,
        },
        subtype: "basic",
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "74453",
          name: "Domino's Pizza",
          uuid: "87727dbd-7f2b-4857-9763-359624165845",
          city: "21",
          area: "Athwa",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["dosa","idli","sandwitch"],
          tags: [],
          costForTwo: 40000,
          costForTwoString: "₹400 FOR TWO",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          slaString: "45 MINS",
          lastMileTravel: 0,
          slugs: {
            restaurant: "dominos-pizza-majura-nondh-test_surat",
            city: "surat",
          },
          cityState: "21",
          address:
            "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
          locality: "Bhatar Road",
          parentId: 2456,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
              {
                meta: "Free Delivery",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          chain: [],
          feeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
          },
          lastMileTravelString: "2.1 kms",
          hasSurge: false,
          sla: {
            restaurantId: "74453",
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            lastMileTravel: 0,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
          },
          promoted: false,
          avgRating: "4.0",
          totalRatings: 1000,
          new: false,
        },
        subtype: "basic",
      }]
  
  




const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurentCard 
                    resData={resList[1]}
                />
                
                
                
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
