import { JSXElement } from "solid-js";

const Card = (props: {
    children: JSXElement;
    rounded?: boolean;
    flat?: boolean;
}) => {
    return (
        <div
            class="p-4 bg-white text-center"
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
