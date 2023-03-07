import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSelectedTag } from "../../features/common/commonSlice";
import { fetchTags } from "../../features/tags/tagsAPI";
import { Tag } from "../../features/tags/tagsSlice";
import { useAppDispatch } from "../../hooks/common";
import { State } from "../../utils/types";

const Tags = () => {
    const dispatch = useAppDispatch();

    const { loading, error, tags } = useSelector((state: State) => state.tags);
    const { selectedTag } = useSelector((state: State) => state.common);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    const handleClick = (tag: string) => {
        dispatch(setSelectedTag(selectedTag === tag ? "" : tag));
    };

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {loading ? (
                    <h1>loading...</h1>
                ) : error ? (
                    <div className="col-span-12 text-red-500">{error}</div>
                ) : (
                    tags.map((tag: Tag) => (
                        <div
                            key={tag.id}
                            onClick={() => handleClick(tag.title)}
                            className={`${
                                selectedTag === tag.title
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-100 text-blue-600"
                            } px-4 py-1 rounded-full cursor-pointer`}
                        >
                            {tag.title}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Tags;
