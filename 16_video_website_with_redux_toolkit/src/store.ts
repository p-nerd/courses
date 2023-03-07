import { configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "./features/common/commonSlice";
import { tagsReducer } from "./features/tags/tagsSlice";
import { videosReducer } from "./features/videos/videosSlice";

const store = configureStore({
    reducer: {
        tags: tagsReducer,
        videos: videosReducer,
        common: commonReducer,
    },
});

export default store;
