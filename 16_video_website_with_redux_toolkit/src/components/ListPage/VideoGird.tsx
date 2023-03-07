import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosAPI";
import { Video } from "../../features/videos/videosSlice";
import { useAppDispatch } from "../../hooks/common";
import { State } from "../../utils/types";
import VideoCard from "./VideoCard";

const filterBySearch = (searchString: string, videos: Video[]) => {
    if (searchString === "") return videos;
    return videos.filter((video) => {
        return video.title.toLowerCase().includes(searchString.toLowerCase());
    });
};

const filterVideosByTags = (tag: string, videos: Video[]) => {
    if (tag === "") return videos;
    return videos.filter((video) => {
        for (let t of video.tags) {
            if (t === tag) return true;
        }
        return false;
    });
};

const VideoGird = () => {
    const dispatch = useAppDispatch();

    const {
        isLoading: loading,
        error,
        videos,
    } = useSelector((state: State) => state.videos);
    const { searchString, selectedTag } = useSelector(
        (state: State) => state.common
    );

    const searchedVideos = filterBySearch(searchString, videos);
    const filteredVideos = filterVideosByTags(selectedTag, searchedVideos);

    useEffect(() => {
        dispatch(fetchVideos());
    }, []);

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {loading ? (
                        <h1>loading...</h1>
                    ) : error ? (
                        <div className="col-span-12 text-red-500">{error}</div>
                    ) : (
                        filteredVideos.map((video) => (
                            <VideoCard
                                key={video.id}
                                id={video.id}
                                thumbnail={video.thumbnail}
                                title={video.title}
                                duration={video.duration}
                                author={video.author}
                                views={video.views}
                                date={video.date}
                                avatar={video.avatar}
                            />
                        ))
                    )}
                </div>
            </section>
        </section>
    );
};

export default VideoGird;
