const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

incrementEl.addEventListener("click", () => {
    store.dispatch({ type: INCREMENT });
});
decrementEl.addEventListener("click", () => {
    store.dispatch({ type: DECREMENT });
});

const render = () => {
    counterEl.innerText = store.getState().count.toString();
};

// Called on state change
store.subscribe(render);

// Call in initial render
render();
