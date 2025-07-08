import React, { useEffect } from "react";
import "../../CSS/BookingDetails.css";
import PropertyImg from "../PropertyDetails/PropertyImg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookingDetails } from "../../Store/Booking/booking-action";

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookingId } = useParams();
  const { bookingDetails } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(fetchBookingDetails(bookingId));
  }, [dispatch, bookingId]);
  if (!bookingDetails || !bookingDetails.property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <p className="details-header">{bookingDetails.property.propertyName}</p>
      <h6 className="details-location">
        <span className="material-symbols-outlined">location_on</span>
        <span className="location">
          {bookingDetails.property.address.area},{" "}
          {bookingDetails.property.address.city},{" "}
          {bookingDetails.property.address.pincode},{" "}
          {bookingDetails.property.address.state}
        </span>
      </h6>
      <div className="details-information-container">
        <div className="details-information">
          <h5>Booking Information</h5>
          <section className="booking-stay-information">
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                bedtime
              </span>
              {bookingDetails.numberOfnights} nights
            </span>
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                calendar_month
              </span>
              {new Date(bookingDetails.fromDate).toLocaleDateString()}
            </span>
            <span className="material-symbols-outlined stay-icon">
              arrow_forward
            </span>
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                calendar_month
              </span>
              {new Date(bookingDetails.toDate).toLocaleDateString()}
            </span>
          </section>
        </div>
        <div className="details-total-price-container">
          <div className="details-total-price">
            <p className="price-header">Total Price</p>
            <span className="price-in-number">
              &#8377; {bookingDetails.price}
            </span>
          </div>
        </div>
      </div>
      <div className="propertyimg-container">
        <PropertyImg images={bookingDetails.property.images} />
      </div>
    </div>
  );
};

export default BookingDetails;
