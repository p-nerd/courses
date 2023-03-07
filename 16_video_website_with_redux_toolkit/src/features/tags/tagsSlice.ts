import { createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsAPI";

export type Tag = {
    id: number;
    title: string;
};

type TagsState = {
    loading: boolean;
    error: string;
    tags: Tag[];
};

const initialState: TagsState = {
    loading: false,
    error: "",
    tags: [],
};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTags.pending, state => {
            state.loading = true;
            state.error = "";
            state.tags = [];
        });
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.tags = action.payload;
        });
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "";
            state.tags = [];
        });
    },
});

export const tagsReducer = tagsSlice.reducer;
