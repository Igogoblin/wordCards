import { createSlice } from "@reduxjs/toolkit";
const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
  },
  reducers: {},
});

// export const {} = wordSlice.actions;
export default wordSlice.reducer;
