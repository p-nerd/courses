import { createResource, For, Show } from "solid-js";

import Card from "../components/Card.tsx";
import { A } from "@solidjs/router";

const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    return response.json();
};

const Home = () => {
    const [products] = createResource(fetchProducts);

    return (
        <div class="grid grid-cols-4 gap-10 my-4">
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
