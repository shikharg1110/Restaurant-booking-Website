import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";

const Restaurant = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6325348&lng=77.4357627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      const response =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      console.log(response);

      setListOfRes(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {listOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;