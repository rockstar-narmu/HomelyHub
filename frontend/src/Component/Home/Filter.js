import React, { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Filter = () => {
  //usestate is like a switch , ismodalopen is like the label or name for the switch, setismodalopen is like a person or hand that truns on the switch.
  //State for controlling the modal visibility.
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state for storing selected filters.
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  }, [selectedFilters, dispatch]);

  //function to handle opening the modal/popupWindow
  const handleOpenModal = () => {
    setIsModalOpen(true); // set isModelOpen to true to open modal.
  };
  //Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // set isModalOpen to false to close modal.
  };
  //Function to handle changes in filtes
  const handleFilterChange = (filterName, value) => {
    //update the selected filters with the new values.
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    //fragment is like a wrapper.
    <>
      {/* Click event to open the model */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Filter;
