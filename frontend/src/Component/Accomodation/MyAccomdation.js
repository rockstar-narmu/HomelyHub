import React from "react";

const MyAccomodation = ({ accomodation }) => {
  return (
    <>
      {accomodation.map((accomodation) => (
        <div className="main-container">
          <div className="myaccomodation-container row">
            <div className="myaccomodation-image-container col-lg-3 col-md-3">
              <img
                className="myaccomodation-img"
                src={accomodation.images[0].url}
                alt="myaccomdation"
              />
            </div>
            <div className="myaccomodation-information col-lg-9 col-md-9">
              <h5 className="myaccomodation-property-name">
                {accomodation.propertyName}
              </h5>
              <div className="stay-information">
                <span className="info">
                  <span class="material-symbols-outlined">schedule</span>
                  CheckIn Time: {accomodation.checkInTime}
                </span>
                <span className="material-symbols-outlined icon">
                  arrow_forward
                </span>
                <span className="info">
                  <span class="material-symbols-outlined">schedule</span>
                  CheckOut Time: {accomodation.checkOutTime}
                </span>
              </div>
              <p className="myaccomodation-address">
                Address : {accomodation.address.area},
                {accomodation.address.city},{accomodation.address.state},
                {accomodation.address.pincode}
              </p>
              <p className="myaccomodation-guest">
                Max no of guest :{accomodation.maximumGuest}
              </p>
              <h6 className="myaccomodation-price">
                <span className="material-symbols-outlined">payments</span>
                Price Per Night :&#8377; {accomodation.price}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyAccomodation;
