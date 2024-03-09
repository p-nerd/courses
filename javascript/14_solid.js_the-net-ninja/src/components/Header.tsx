import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { useCart } from "@/contexts/cart_context";

import bannerImage from "../assets/banner.png";

const Header = () => {
    const [isThemeDark, setIsThemeDark] = createSignal<boolean>(false);

    const { itemsCount } = useCart();

    return (
        <>
            <header
                class="my-4 flex items-center gap-4 p-2 text-xl"
                classList={{
                    "bg-neutral-900 text-white rounded": isThemeDark(),
                }}
            >
                <span class="material-symbols-outlined cursor-pointer" onClick={() => setIsThemeDark(!isThemeDark())}>
                    light_mode
                </span>
                <h1>Ninja match</h1>
                <A href="/">Home</A>
                <A href="/cart">Cart ({itemsCount()})</A>
            </header>
            <img class="rounded-md" src={bannerImage} alt="" />
        </>
    );
};

export default Header;
