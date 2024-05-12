
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg flex flex-col my-2 m-4">
      <div className="grid grid-cols-1 divide-y divide-gray-200">
        <div className="p-4 bg-white rounded-lg shadow-md m-4">
          <h2 className="uppercase tracking-wide text-gray-800 text-xl font-bold mb-4 border-b-2 border-gray-300">
            About Our Restaurant Booking Platform
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Welcome to our restaurant booking platform! We aim to simplify the
            process of discovering and booking restaurants. With our platform,
            you can easily find restaurants based on your location, preferred
            cuisine, price range, and user ratings. We provide comprehensive
            information about each restaurant, including menus, prices, seat
            availability, contact details, and available discounts.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md m-4">
          <p className="text-gray-700 text-base mb-4">
            What sets us apart is our personalized recommendation system, which
            suggests restaurants based on your preferences and past
            interactions. Our seamless booking system allows you to reserve
            seats hassle-free. We are committed to making your dining
            experiences memorable. Join us and explore the culinary delights in
            your city!
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md m-4">
          <p className="text-gray-700 text-base mb-4">
            We also prioritize the safety and health of our users. All
            restaurants listed on our platform are required to adhere to strict
            hygiene standards. Users can also access health and safety
            information for each restaurant. We believe that everyone should be
            able to enjoy their meal with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
