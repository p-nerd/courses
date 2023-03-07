import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../utils/types";
import Description from "./Description";
import Player from "./Player";
import RelatedVideos from "./RelatedVideos";

const VideoPlayerPage = () => {
    const { videoId } = useParams();

    const video = useSelector((state: State) => state.videos).videos.find(
        video => video.id === Number(videoId)
    );

    return (
        <>
            <section className="pt-6 pb-20">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {!video ? (
                        "Video not found"
                    ) : (
                        <div className="grid grid-cols-3 gap-2 lg:gap-8">
                            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                                <Player link={video.link} title={video.title} />
                                <Description
                                    id={video.id}
                                    title={video.title}
                                    date={video.date}
                                    likes={video.likes}
                                    unlikes={video.unlikes}
                                    description={video.description}
                                />
                            </div>
                            <RelatedVideos tags={video.tags} videoId={video.id} />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default VideoPlayerPage;
