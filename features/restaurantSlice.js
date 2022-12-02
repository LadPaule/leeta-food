import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    imageUrl: null,
    id: null,
    rating: null,
    title: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,

  //   these are actions that help us to manipulate the cart or the basket
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant;

export default restaurantSlice.reducer;
