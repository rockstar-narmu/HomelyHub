import axios from "axios";

import { propertyAction } from "./property-slice";

//action creater to fetch properties
export const getAllProperties = () => async (dispatch, getState) => {
  try {
    dispatch(propertyAction.getRequest());

    const { searchParams } = getState().properties;
    const response = await axios.get(`/api/v1/rent/listing`, {
      params: { ...searchParams },
    });
    console.log(response);
    if (!response) {
      throw new Error("Could not fetch any properties");
    }

    const { data } = response;
    dispatch(propertyAction.getProperties(data));
  } catch (error) {
    dispatch(propertyAction.getErrors(error.message));
  }
};
