import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=f7fd04d11b91ca4665a96843f7d033d7"
  );
  return response.data;
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(getMovies.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default movieSlice.reducer;
