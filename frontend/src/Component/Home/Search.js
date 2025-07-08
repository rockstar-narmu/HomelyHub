import React, { useState } from "react";
import { DatePicker, Space } from "antd";

import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Search = () => {
  const { RangePicker } = DatePicker;
  const [keyword, setKeyword] = useState({});

  //storing the data range value
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();
  function searchHandler(e) {
    e.preventDefault();
    dispatch(propertyAction.updateSearchParams(keyword));
    dispatch(getAllProperties());
    setKeyword({
      city: "",
      guests: "",
      dateIn: "",
      dateOut: "",
    });
    setValue([]);
  }

  function returnDates(date, dateString) {
    //setting the date range value in state
    setValue([date[0], date[1]]);
    //updating keyword object with date range
    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateOut", dateString[1]);
  }

  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="searchbar">
        {/* Input field for seaching destinations */}
        <input
          className="search"
          id="search-destination"
          placeholder="Search Destinations"
          type="text"
          value={keyword.city}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />
        {/* Date range picker */}

        <Space direction="vertical" size={12} className="search">
          <RangePicker
            value={value}
            format="YYYY-MM-DD"
            picker="date"
            className="date_picker"
            disabledDate={(current) => {
              return current && current.isBefore(Date.now(), "day");
            }}
            onChange={returnDates}
          />
        </Space>
        {/* Inupt field for adding guest */}
        <input
          className="search"
          id="addguest"
          placeholder="Add guest"
          type="number"
          value={keyword.guests}
          onChange={(e) => updateKeyword("guest", e.target.value)}
        />

        {/* Search icon */}
        <span
          class="material-symbols-outlined searchicon"
          onClick={searchHandler}
        >
          search
        </span>
      </div>
    </>
  );
};

export default Search;
