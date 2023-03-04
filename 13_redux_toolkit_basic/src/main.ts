import { decrement, increment } from "./slices/counterSlice";
import store from "./store";

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment(undefined));
store.dispatch(increment(undefined));
store.dispatch(decrement(undefined));
