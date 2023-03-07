import { Link } from "react-router-dom";

type Props = {
    id: number;
    thumbnail: string;
    title: string;
    duration: string;
    author: string;
    views: string;
    date: string;
};

const RelatedVideo = ({ id, thumbnail, title, duration, author, views, date }: Props) => {
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/video/${id}`}>
                    <img src={thumbnail} className="object-cover" alt={title} />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {duration}
                </p>
            </div>
            <div className="flex flex-col w-full">
                <Link to={`/video/${id}`}>
                    <p className="text-slate-900 text-sm font-semibold">{title}</p>
                </Link>

                <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`/author/1`}
                >
                    {author}
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
};

export default RelatedVideo;
