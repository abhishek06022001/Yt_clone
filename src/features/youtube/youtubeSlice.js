import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};
const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      (state.videos = []), (state.nextPageToken = null);
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        console.log("State updation");
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      } else {
        console.log("Not fulfilled");
      }
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        console.log("State updation");
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      } else {
        console.log("Not fulfilled");
      }
    });
  },
});
export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  youtubeSlice.actions;
export default youtubeSlice.reducer;
