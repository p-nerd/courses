import { Route, Routes } from "@solidjs/router";
import { CartContextProvider } from "./contexts/cart_context.tsx";

import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Header from "./components/Header.tsx";
import Product from "./pages/Product.tsx";

const App = () => {
    return (
        <CartContextProvider>
            <div class="container m-auto">
                <Header />
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/product/:id" component={Product} />
                </Routes>
            </div>
        </CartContextProvider>
    );
};

export default App;
