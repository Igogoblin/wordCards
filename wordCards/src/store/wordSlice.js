import { createSlice } from "@reduxjs/toolkit";
// import data from "./words.js";
const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
  },
  reducers: {
    // addWords(state) {
    //   // state=clone(data);
    // },
  },
});

// export const {} = wordSlice.actions;
export default wordSlice.reducer;
