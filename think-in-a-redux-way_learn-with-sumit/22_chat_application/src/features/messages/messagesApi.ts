import { MESSAGES_PER_PAGE } from "../../utils/env";
import apiSlice from "../api/apiSlice";
import { TAddMessage, TMessage } from "./messagesTypes";

export const messagesApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query<TMessage[], number>({
            query: id =>
                `/messages` +
                `?conversationId_like=${id}` +
                `&_sort=timestamp&_order=desc` +
                `&_page=1&_limit=${MESSAGES_PER_PAGE}`,
        }),
        addMessage: builder.mutation<TMessage, TAddMessage>({
            query: data => ({
                url: "/messages",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetMessagesQuery } = messagesApi;
