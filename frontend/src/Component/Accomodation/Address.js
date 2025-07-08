import React from "react";

const Address = ({ setAddress, address }) => {
  return (
    <div className="address-fields">
      <input
        className="area"
        type="text"
        placeholder="Area"
        onChange={(e) => setAddress({ ...address, area: e.target.value })}
        required
      />
      <input
        className="city"
        type="text"
        placeholder="City"
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        required
      />
      <input
        className="state"
        type="text"
        placeholder="State"
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
        required
      />
      <input
        className="pincode"
        type="number"
        placeholder="Pincode"
        onChange={(e) =>
          setAddress({ ...address, pincode: parseFloat(e.target.value) })
        }
        required
      />
    </div>
  );
};

export default Address;
