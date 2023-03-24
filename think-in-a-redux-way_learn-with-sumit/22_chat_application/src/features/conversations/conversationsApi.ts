import { CONVERSIONS_PER_PAGE } from "../../utils/env";
import apiSlice from "../api/apiSlice";
import { messagesApi } from "../messages/messagesApi";
import {
    TConversation,
    TAddConversion,
    TEditConversion,
} from "./conversationsTypes";

const conversionsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getConversions: builder.query<TConversation[], string>({
            query: email =>
                `/conversations` +
                `?participants_like=${email}` +
                `&_sort=timestamp&_order=desc` +
                `&_page=1&_limit=${CONVERSIONS_PER_PAGE}`,
        }),
        getConversion: builder.query<
            TConversation[],
            { userEmail: string; participantsEmail: string }
        >({
            query: ({ userEmail, participantsEmail }) =>
                `/conversations` +
                `?participants=${userEmail}-${participantsEmail}` +
                `&participants=${participantsEmail}-${userEmail}`,
        }),
        addConversion: builder.mutation<
            TConversation,
            { sender: string; data: TAddConversion }
        >({
            query: data => ({
                url: `/conversations`,
                method: "POST",
                body: data.data,
            }),
            onQueryStarted: async (
                { sender, data },
                { queryFulfilled, dispatch }
            ) => {
                // todo optimistic update here

                try {
                    const { data: conversation } = await queryFulfilled;
                    if (conversation?.id) {
                        const { users } = conversation;
                        const senderUser = users.find(
                            user => user.email === sender
                        );
                        const receiverUser = users.find(
                            user => user.email !== sender
                        );
                        if (senderUser && receiverUser) {
                            dispatch(
                                messagesApi.endpoints.addMessage.initiate({
                                    conversationId: conversation.id,
                                    sender: senderUser,
                                    receiver: receiverUser,
                                    message: conversation.message,
                                    timestamp: conversation.timestamp,
                                })
                            );
                        }
                    }
                } catch (error) {
                    // pathResult1.undo();
                }
            },
        }),
        editConversion: builder.mutation<
            TConversation,
            { id: number; body: TEditConversion; sender: string }
        >({
            query: ({ body, id }) => ({
                url: `/conversations/${id}`,
                method: "PATCH",
                body: body,
            }),
            onQueryStarted: async (
                { sender, id, body },
                { queryFulfilled, dispatch }
            ) => {
                // optimistic cache update start
                const pathResult1 = dispatch(
                    apiSlice.util.updateQueryData(
                        "getConversions" as never,
                        sender as never,
                        (draft: any) => {
                            const conversation = draft?.find(
                                (c: any) => c.id == id
                            );
                            conversation.message = body.message;
                            conversation.timestamp = body.timestamp;
                        }
                    )
                );
                // const pathResult2 = dispatch(
                //     apiSlice.util.updateQueryData(
                //         "getMessages" as never,
                //         id as never,
                //         (draft: any) => {
                //             draft.push({
                //                 conversationId: id,
                //                 sender: body.sender,
                //                 receiver: body.receiver,
                //                 message: body.message,
                //                 timestamp: body.timestamp,
                //             });
                //         }
                //     )
                // );
                // optimistic cache update end

                try {
                    const { data: conversation } = await queryFulfilled;
                    if (conversation?.id) {
                        const { users } = conversation;
                        const senderUser = users.find(
                            user => user.email === sender
                        );
                        const receiverUser = users.find(
                            user => user.email !== sender
                        );
                        if (senderUser && receiverUser) {
                            const response = await dispatch(
                                messagesApi.endpoints.addMessage.initiate({
                                    conversationId: conversation.id,
                                    sender: senderUser,
                                    receiver: receiverUser,
                                    message: conversation.message,
                                    timestamp: conversation.timestamp,
                                })
                            ).unwrap();
                            // update messages cache pessimistically start
                            dispatch(
                                apiSlice.util.updateQueryData(
                                    "getMessages" as never,
                                    response.conversationId as never,
                                    (draft: any) => {
                                        draft.push(response);
                                    }
                                )
                            );
                            // update messages cache pessimistically end
                        }
                    }
                } catch (err) {
                    pathResult1.undo();
                    // pathResult2.undo();
                }
            },
        }),
    }),
});

export const {
    useGetConversionsQuery,
    useGetConversionQuery,
    useAddConversionMutation,
    useEditConversionMutation,
} = conversionsApi;

export default conversionsApi;
