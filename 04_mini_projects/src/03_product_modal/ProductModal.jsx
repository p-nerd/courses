const ProductModal = () => {
    return (
        <div className="flex min-h-screen  items-center justify-center bg-slate-300">
            <div className="flex max-w-4xl flex-col space-x-6 rounded-xl bg-white p-10 shadow-md md:flex-row">
                <div>
                    <img
                        src="./images/03/headphone.png"
                        className="max-w-[14rem] transition duration-200 hover:scale-110"
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                    <div className="inline-block max-w-fit rounded-full bg-black py-1 px-2 text-sm text-white">
                        Free Shipping
                    </div>
                    <h2 className="text-2xl">
                        Razer Kraken Kitty Edt Gaming Headset Quartz
                    </h2>
                    <div className="line-through">$799</div>
                    <div className="text-5xl font-bold">$599</div>
                    <div className="text-sm text-slate-400">
                        This offer is valid until April 3rd or as long as stock
                        lasts!
                    </div>
                    <button className="w-full">
                        <div className="block rounded-lg border-b-8 border-blue-700 bg-blue-500 px-8 py-4 text-center text-white transition duration-200 hover:bg-blue-700 hover:pt-6 hover:pb-2">
                            Add to cart
                        </div>
                    </button>
                    <div className="text-sm">50+ pcs. in stock</div>
                    <div className="flex space-x-5">
                        <button className="pt-2 hover:pt-0 hover:shadow-lg hover:shadow-slate-400">
                            <div className="flex space-x-1 rounded-md border-2 px-6 py-3">
                                <img
                                    className="w-8"
                                    src="./images/03/weight.png"
                                    alt=""
                                />
                                <div className="pt-1">Add to cart</div>
                            </div>
                        </button>
                        <button className="pt-2 hover:pt-0">
                            <div className="flex space-x-1 rounded-md border-2 px-6 py-3">
                                <img
                                    className="w-8"
                                    src="./images/03/heart.png"
                                    alt=""
                                />
                                <div className="pt-1">Add to wishlist</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
