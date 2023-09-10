import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

import bannerImage from "../assets/banner.png";

const Header = () => {
    const [isThemeDark, setIsThemeDark] = createSignal<boolean>(false);

    return (
        <>
            <header
                class="my-4 p-2 text-xl flex items-center gap-4"
                classList={{
                    "bg-neutral-900 text-white rounded": isThemeDark(),
                }}
            >
                <span
                    class="material-symbols-outlined cursor-pointer"
                    onClick={() => setIsThemeDark(!isThemeDark())}
                >
                    light_mode
                </span>
                <h1>Ninja match</h1>
                <A href="/">Home</A>
                <A href="/cart">Cart</A>
            </header>
            <img class="rounded-md" src={bannerImage} alt="" />
        </>
    );
};

export default Header;
