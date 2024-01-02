import { useCart } from "@/contexts/cart_context.tsx";
import { For } from "solid-js";

import Card from "../components/Card.tsx";

const Cart = () => {
    const { items, totalPrice } = useCart();

    return (
        <div class="mx-auto my-8 max-w-md">
            <Card rounded={true}>
                <h2>You shopping cart</h2>
                <For each={items}>
                    {item => (
                        <p class="my-3">
                            {item.title} - ${item.price} x {item.qty}
                        </p>
                    )}
                </For>
                <p class="mt-8 border-t-2 pt-4 font-bold">Total Price: ${totalPrice()}</p>
            </Card>
        </div>
    );
};

export default Cart;
