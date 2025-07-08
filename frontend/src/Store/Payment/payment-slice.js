import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentDetails: {
    checkinDate: null,
    checkoutDate: null,
    totalPrice: 0,
    propertyName: "",
    address: "",
    maximumGuest: 0,
    images: "",
  },
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const { setPaymentDetails } = paymentSlice.actions;
export const selectPaymentDetails = (state) => state.payment.paymentDetails;
export default paymentSlice;
