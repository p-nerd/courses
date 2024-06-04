import { JSX, createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export type TItem = {
    id: number;
    title: string;
    price: number;
    qty: number;
};

type TCartContext = {
    items: TItem[];
    addItem: (item: TItem) => void;
    itemsCount: () => number;
    totalPrice: () => number;
    adding: () => boolean;
};

const CartContext = createContext<TCartContext>({
    items: [],
    addItem: () => {},
    itemsCount: () => 0,
    totalPrice: () => 0,
    adding: () => false,
});

export const CartContextProvider = (p: { children?: JSX.Element }) => {
    const [adding, setAdding] = createSignal(false);

    const [items, setItems] = createStore<TItem[]>([]);

    const addItem = (item: TItem) => {
        setAdding(true);
        const e = items.find(t => t.id === item.id);
        if (e) {
            setItems(
                t => t.id === item.id,
                "qty",
                qty => qty + 1,
            );
        } else {
            setItems([...items, { ...item }]);
        }
        setTimeout(() => setAdding(false), 2000);
    };

    const itemsCount = () => {
        return items.reduce((p, c) => p + c.qty, 0);
    };

    const totalPrice = () => {
        return items.reduce((p, c) => p + c.price, 0);
    };

    return (
        <CartContext.Provider value={{ items, addItem, itemsCount, totalPrice, adding }}>
            {p.children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
