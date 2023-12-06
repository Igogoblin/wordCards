import { createSlice } from "@reduxjs/toolkit";
import data from "./words.json";
// import data from "./words.js";
const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: [...data],
  },
  reducers: {
    // addWords(state) {
    //   // state=clone(data);
    // },
    showState(state) {
      console.log(state);
    },
  },
});

export const { showState } = wordSlice.actions;
export default wordSlice.reducer;
