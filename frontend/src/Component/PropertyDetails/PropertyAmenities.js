import React from "react";

const PropertyAmenities = ({ amenities }) => {
  return (
    <>
      <h2 className="property-amenities">What this place offers</h2>
      <div className="amenities">
        {amenities.map((amenity, index) => (
          <p key={index}>
            <span className="material-symbols-outlined">{amenity.icon}</span>
            <span>{amenity.name}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export default PropertyAmenities;
