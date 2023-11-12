import { JSX } from "solid-js";

const Card = (props: { children: JSX.Element; rounded?: boolean; flat?: boolean }) => {
    return (
        <div
            class="bg-white p-4 text-center"
            classList={{
                "rounded-md": props.rounded,
                "shadow-md": !props.flat,
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;
