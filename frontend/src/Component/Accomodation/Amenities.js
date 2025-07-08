import React, { useState } from "react";

const Amenities = ({ perks, setPerks }) => {
  const handleCheckboxChange = (id) => {
    setPerks((prevPerks) =>
      prevPerks.map((perk) =>
        perk.id === id ? { ...perk, checked: !perk.checked } : perk
      )
    );
  };

  return (
    <div className="perks row">
      {perks.map((perk) => (
        <div
          key={perk.id}
          className={`checkbox-container col-sm-12 col-md-3 col-lg-2 ${perk.value}-box`}
        >
          <input
            type="checkbox"
            checked={perk.checked}
            onChange={() => handleCheckboxChange(perk.id)}
          />
          <span className="material-symbols-outlined">{perk.icon}</span>
          <span>{perk.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
