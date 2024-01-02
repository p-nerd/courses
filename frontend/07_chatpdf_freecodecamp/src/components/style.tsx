import { TChildren } from "@/helpers/types";

export const Center = (p: { children: TChildren }) => {
    return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{p.children}</div>;
};
