import NavLink from "./NavLink";

const ImageGallery = () => {
    return (
        <div className="min-h-screen bg-cyan-50 py-3">
            <div className="m-auto flex max-w-xs flex-col rounded-3xl bg-white py-6 px-44 shadow-md shadow-gray-300 md:mx-4 md:max-w-none md:items-end md:p-44 ">
                <div className="flex flex-col items-center space-y-6 text-lg md:flex-row md:items-end md:space-y-0 md:space-x-8">
                    <NavLink>Vector</NavLink>
                    <NavLink>Illustrations</NavLink>
                    <NavLink>Images</NavLink>
                    <NavLink src="/icons">Icons</NavLink>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ImageGallery;
