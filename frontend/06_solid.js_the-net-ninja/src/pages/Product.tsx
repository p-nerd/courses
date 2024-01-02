import { api_base_url } from "@/config/mics";
import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";
import { useCart } from "@/contexts/cart_context";
import { TProduct } from "@/resources/products";

import Loading from "@/components/Loading";

const fetchProduct = async (id: string) => {
    const response = await fetch(`${api_base_url}/products/${id}`);
    return response.json();
};

const Product = () => {
    const params = useParams();

    const [product] = createResource<TProduct, string>(params.id, fetchProduct);

    const { addItem, adding } = useCart();

    return (
        <div class="my-7">
            <Show when={product()} fallback={<Loading />}>
                <div class="grid grid-cols-5 gap-7">
                    <div class="col-span-2">
                        <img src={product()?.img} alt="product image" />
                    </div>

                    <div class="col-span-3">
                        <h2 class="mb-7 text-3xl font-bold">{product()?.title}</h2>
                        <p>{product()?.description}</p>
                        <p class="my-7 text-2xl">Only £{product()?.price}</p>
                        <button
                            disabled={adding()}
                            class="btn"
                            onClick={() =>
                                addItem({
                                    id: product()?.id || 0,
                                    title: product()?.title || "",
                                    price: product()?.price || 0,
                                    qty: 1,
                                })
                            }
                        >
                            Add to Cart
                        </button>
                        <Show when={adding()}>
                            <div class="m-2 inline-block rounded-md border-2 border-amber-500 p-2">
                                {product()?.title} was added to the cart
                            </div>
                        </Show>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default Product;
