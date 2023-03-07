import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./videosAPI";

export type Video = {
    id: number;
    title: string;
    description: string;
    author: string;
    avatar: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
    tags: string[];
    likes: number;
    unlikes: number;
};

type VideosState = {
    loading: boolean;
    error: string;
    videos: Video[];
};

const initialState: VideosState = {
    loading: false,
    error: "",
    videos: [],
};

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        incrementLike: (state, action) => {
            state.videos = state.videos.map(video => {
                if (video.id === action.payload) {
                    video.likes++;
                }
                return video;
            });
        },
        decrementLike: (state, action) => {
            state.videos = state.videos.map(video => {
                if (video.id === action.payload) {
                    video.likes--;
                }
                return video;
            });
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchVideos.pending, state => {
            state.loading = true;
            state.error = "";
            state.videos = [];
        });

        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
        });

        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "";
            state.videos = [];
        });
    },
});

export const videosReducer = videosSlice.reducer;
export const { incrementLike, decrementLike } = videosSlice.actions;
