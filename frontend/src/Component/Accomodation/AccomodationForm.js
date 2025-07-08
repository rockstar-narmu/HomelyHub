import React, { useState } from "react";
import ImagesUploading from "./ImagesUploading";
import { useDispatch } from "react-redux";
import {
  accomodation,
  createAccomodation,
} from "../../Store/Accomodation/Accomodation-action";
import Amenities from "./Amenities";
import Address from "./Address";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AccomodationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialPerks = [
    { id: "wifi", value: "Wifi", checked: false, icon: "wifi" },
    {
      id: "kitchen",
      value: "Kitchen",
      checked: false,
      icon: "kitchen",
    },
    {
      id: "parking",
      value: "Free Parking",
      checked: false,
      icon: "garage_home",
    },
    {
      id: "washingmachine",
      value: "Washing Machine",
      icon: "local_laundry_service",
      checked: false,
    },
    { id: "tv", value: "Tv", checked: false, icon: "tv" },
    { id: "pool", value: "Pool", checked: false, icon: "pool" },
    { id: "ac", value: "Ac", checked: false, icon: "air" },
  ];

  const [perks, setPerks] = useState(initialPerks);
  const [property, setProperty] = useState({
    name: "",
    description: "",
    propertyType: undefined,
    roomType: undefined,
    extraInfo: undefined,
  });
  const [address, setAddress] = useState({
    area: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [check, setCheck] = useState({
    checkIn: undefined,
    checkOut: undefined,
    maximumGuest: 0,
    price: 0,
  });
  const [images, setImages] = useState([]);

  const getImages = (img) => {
    setImages(img);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedPerks = perks
      .filter((perk) => perk.checked)
      .map((perk) => ({
        name: perk.value,
        icon: perk.icon,
      }));

    let filterImages;
    console.log(images.length);
    if (images.length >= 5) {
      filterImages = images.map((image) => ({
        url: image,
      }));
    } else {
      toast.warning("Minimum you should upload 5 images");
      return false;
    }
    dispatch(
      createAccomodation({
        propertyName: property.name,
        description: property.description,
        propertyType: property.propertyType,
        roomType: property.roomType,
        extraInfo: property.extraInfo,
        images: filterImages,
        address,
        amenities: selectedPerks,
        checkInTime: check.checkIn,
        checkOutTime: check.checkOut,
        maximumGuest: check.maximumGuest,
        price: check.price,
      })
    );
    navigate("/accommodation");
  };
  return (
    <div className="accom-form-container">
      <form className="accom-form" onSubmit={submitHandler}>
        <h4 className="title-header">
          Property Name <span className="note">*</span>
        </h4>
        <div className="title-container input-container">
          <label className="form-labels">
            Title for your place.should be short and catchy as in advertisment
          </label>
          <br></br>
          <input
            className="title"
            type="text"
            placeholder="Title"
            required
            onChange={(e) => setProperty({ ...property, name: e.target.value })}
          ></input>
        </div>
        <div className="address-container ">
          <h4 className="address-header">
            Address <span className="note">*</span>
          </h4>
          <label className="form-labels">Address to your place</label>
          <br></br>
          <Address setAddress={setAddress} address={address} />
        </div>
        <ImagesUploading getImages={getImages} />
        <div className="description-container input-container">
          <h4 className="description-header">
            Description <span className="note">*</span>
          </h4>
          <label className="form-labels">
            Describe your place to attract people
          </label>
          <br></br>
          <textarea
            className="description"
            rows="3"
            placeholder="Description"
            onChange={(e) =>
              setProperty({ ...property, description: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="property-room-container">
          <div className="property-type">
            <h4 className="property-type-header">Property Type</h4>
            <select
              value={property.propertyType}
              onChange={(e) =>
                setProperty({ ...property, propertyType: e.target.value })
              }
            >
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Guest House">Guest House</option>
              <option value="Hotel">Hotel</option>
            </select>
          </div>
          <div className="room-type">
            <h4 className="room-type-header">Room type</h4>
            <select
              value={property.roomType}
              onChange={(e) =>
                setProperty({ ...property, roomType: e.target.value })
              }
            >
              <option value="Anytype">Anytype...</option>
              <option value="Entire Home">Entire Home </option>
              <option value="Room">Room </option>
            </select>
          </div>
        </div>

        <div className="perks-container ">
          <h4 className="perks-header">Amenities</h4>
          <p className="form-paras">Select perks</p>
          <Amenities perks={perks} setPerks={setPerks} />
        </div>
        <div className="info-container input-container">
          <h4 className="info-header">Extra Info</h4>
          <label className="form-labels">House rules and more</label>
          <br></br>
          <textarea
            className="info"
            onChange={(e) =>
              setProperty({ ...property, extraInfo: e.target.value })
            }
            rows="3"
          ></textarea>
        </div>
        <div className="timein-timeout-maxguest">
          <h4 className="timein-maxguest-header">
            Check in, Check out times and max guests
          </h4>
          <p className="form-paras">
            Add check-in and check-out times (24 Hour Format)
          </p>
          <div className="container-time-maxguest row">
            <section className="checkin-time col-sm-12 col-md-4 col-lg-3">
              <label className="check-labels">Check In Time</label>
              <input
                type="time"
                placeholder="00:00"
                onChange={(e) =>
                  setCheck({ ...check, checkIn: e.target.value })
                }
              />
            </section>
            <section className="checkout-time col-sm-12 col-md-4 col-lg-3">
              <label className="check-labels">Check Out Time</label>
              <input
                type="time"
                placeholder="00:00"
                onChange={(e) =>
                  setCheck({ ...check, checkOut: e.target.value })
                }
              />
            </section>
            <section className="max-guest col-sm-12 col-md-4 col-lg-3">
              <label className="check-labels">
                Max Guests <span className="note">*</span>
              </label>
              <input
                type="number"
                placeholder="0"
                onChange={(e) =>
                  setCheck({
                    ...check,
                    maximumGuest: parseFloat(e.target.value),
                  })
                }
                required
              />
            </section>
            <section className="price-per-night col-sm-12 col-md-4 col-lg-3">
              <label className="check-labels">
                Price Per Night (Rs) <span className="note">*</span>
              </label>
              <input
                type="number"
                placeholder="0"
                onChange={(e) =>
                  setCheck({ ...check, price: parseFloat(e.target.value) })
                }
                required
              />
            </section>
          </div>
        </div>
        <button className="save" type="Submit ">
          Save
        </button>
      </form>
    </div>
  );
};

export default AccomodationForm;
