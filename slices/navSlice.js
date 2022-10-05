import { createSlice } from "@reduxjs/toolkit";
// import { set } from "immer/dist/internal";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTtavelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTtavelTimeInformation } =
  navSlice.actions;

//selectors

export const selectOrigin =(state)=> state.nav.origin;
export const selectDestination =(state)=> state.nav.destination;
export const selectTravelTimeInformation =(state)=> state.nav.travelTimeInformation;

export default navSlice.reducer;