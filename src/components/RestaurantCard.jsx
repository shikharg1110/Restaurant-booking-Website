import PropTypes from "prop-types";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-500">
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    resData.cloudinaryImageId
                }
                alt="res-img"
                className="res-logo rounded-lg w-full h-40 object-cover"
            />

            <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.sla.deliveryTime} min</h4>
            <h4>{resData.costForTwo}</h4>

        </div>
    );
};

RestaurantCard.propTypes = {
    resData: PropTypes.shape({
        cloudinaryImageId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
        avgRating: PropTypes.number.isRequired,
        sla: PropTypes.shape({
            deliveryTime: PropTypes.number.isRequired,
        }).isRequired,
        costForTwo: PropTypes.number.isRequired,
    }).isRequired,
};

export default RestaurantCard;