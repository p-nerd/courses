import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TVideo = {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
};

export type TAddVideo = {
    title: string;
    description: string;
    author: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
};

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Videos"],
    endpoints: builder => ({
        getVideos: builder.query<TVideo[], void>({
            query: () => `/videos`,
            keepUnusedDataFor: 10 * 60,
            providesTags: ["Videos"],
        }),
        getVideo: builder.query<TVideo, number>({
            query: id => `/videos/${id}`,
        }),
        getRelatedVideos: builder.query<TVideo[], { id: number; title: string }>({
            query: ({ id, title }) => {
                const tags = title.split(" ");
                const likes = tags.map(tag => `title_like=${tag}`);
                const queryString = `/videos?${likes.join("&")}&&id_ne=${id}&_limit=4`;
                return queryString;
            },
        }),
        addVideo: builder.mutation<TVideo, TAddVideo>({
            query: data => ({ url: `/videos`, method: "POST", body: data }),
            invalidatesTags: ["Videos"],
        }),
    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
} = apiSlice;
