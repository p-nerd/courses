import { useAppDispatch } from "../../hooks/common";
import likeImage from "./../../assets/like.svg";
import unlikeImage from "./../../assets/unlike.svg";

type Props = {
    id: number;
    title: string;
    date: string;
    likes: number;
    unlikes: number;
    description: string;
};

const Description = ({ id, title, date, likes, unlikes, description }: Props) => {
    const dispatch = useAppDispatch();

    const handleLike = () => {};

    const handleUnlike = () => {};

    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">{title}</h1>
            <div className="pb-4 flex items-center space-between border-b">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                </h2>
                {/* like/unlike */}
                <div className="flex gap-10 w-48">
                    <div className="flex gap-1">
                        <div className="shrink-0" onClick={handleLike}>
                            <img className="w-5 block" src={likeImage} alt="Like" />
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
                    </div>
                    <div className="flex gap-1">
                        <div className="shrink-0" onClick={handleUnlike}>
                            <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">{description}</div>
        </div>
    );
};

export default Description;
