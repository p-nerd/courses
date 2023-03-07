import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../utils/env";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const response = await fetch(`${BASE_API_URL}/videos`);
    const videos = await response.json();
    return videos;
});
