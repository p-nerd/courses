import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../../utils/env";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const response = await fetch(`${BASE_API_URL}/tags`);
    const tags = await response.json();
    return tags;
});
