import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import movieSlice from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
  middleware: [thunk],
});
