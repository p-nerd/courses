import { createSlice } from "@reduxjs/toolkit";

type CommonState = {
    searchString: string;
    selectedTag: string;
};

const initialState: CommonState = {
    searchString: "",
    selectedTag: "",
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setSearchString: (state, action) => {
            state.selectedTag = "";
            state.searchString = action.payload;
        },
        setSelectedTag: (state, action) => {
            state.selectedTag = action.payload;
        },
    },
});

export const commonReducer = commonSlice.reducer;
export const { setSearchString, setSelectedTag } = commonSlice.actions;
