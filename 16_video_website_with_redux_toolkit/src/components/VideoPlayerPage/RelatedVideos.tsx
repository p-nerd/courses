import { useSelector } from "react-redux";
import { State } from "../../utils/types";
import SingleRelatedVideo from "./SingleRelatedVideo";

type Props = {
    tags: string[];
    videoId: number;
};

const RelatedVideos = ({ tags, videoId }: Props) => {
    const rVideos = useSelector((state: State) => state.videos).videos.filter(video => {
        if (video.id === videoId) return false;
        for (let t of tags) {
            for (let t2 of video.tags) {
                if (t === t2) return true;
            }
        }
        return false;
    });

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {rVideos.map(video => (
                <SingleRelatedVideo
                    key={video.id}
                    id={video.id}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    duration={video.duration}
                    author={video.author}
                    views={video.views}
                    date={video.date}
                />
            ))}
        </div>
    );
};

export default RelatedVideos;
