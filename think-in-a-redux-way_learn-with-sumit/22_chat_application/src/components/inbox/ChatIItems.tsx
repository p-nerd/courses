import gravatarUrl from "gravatar-url";
import moment from "moment";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useGetConversionsQuery } from "../../features/conversations/conversationsApi";
import { getPartnerInfo } from "../../utils/func";
import ChatItem from "./ChatItem";

const ChatItems = () => {
    const {
        user: { email },
    } = useAppSelector(state => state.auth);

    const {
        data: conversions,
        isLoading,
        isError,
        error,
    } = useGetConversionsQuery(email);

    let error2: any = error;

    return (
        <ul>
            {isLoading ? (
                <li>Loading...</li>
            ) : isError ? (
                <li>{error2?.error}</li>
            ) : conversions && conversions.length === 0 ? (
                <li>There is no conversions by the user</li>
            ) : (
                <li>
                    {conversions?.map(item => {
                        const { id, message, users, timestamp } = item;
                        const otherUser = getPartnerInfo(users, email);

                        return (
                            <Link key={id} to={`/inbox/${id}`}>
                                <ChatItem
                                    avatar={gravatarUrl(otherUser.email, {
                                        size: 80,
                                    })}
                                    name={otherUser.name}
                                    lastMessage={message}
                                    lastTime={moment(timestamp).fromNow()}
                                />
                            </Link>
                        );
                    })}
                </li>
            )}
        </ul>
    );
};

export default ChatItems;
