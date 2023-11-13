import { createResource, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { api_base_url } from "@/config/mics";

import Card from "@/components/Card";

const fetchProducts = async () => {
    const response = await fetch(`${api_base_url}/products`);
    return await response.json();
};

const Home = () => {
    const [products] = createResource(fetchProducts);

    return (
        <div class="my-4 grid grid-cols-4 gap-10">
            <Show when={products()} fallback={<p>Loading ....</p>}>
                <For each={products()}>
                    {(product: any) => (
                        <Card rounded={true}>
                            <img src={product.img} alt="" />
                            <h1 class="my-3">{product.title}</h1>
                            <A href={`/product/${product.id}`} class="btn">
                                View Product
                            </A>
                        </Card>
                    )}
                </For>
            </Show>
        </div>
    );
};

export default Home;
