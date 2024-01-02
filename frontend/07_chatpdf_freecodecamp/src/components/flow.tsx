import { TChildren } from "@/helpers/types";
import { Fragment } from "react";

export const Show = (p: { when?: boolean; children: TChildren; fallback?: TChildren }) => {
    return <>{p.when ? <>{p.children}</> : <>{p.fallback}</>}</>;
};

export const For = <T,>(p: { each: T[]; children: (item: T, index: number) => TChildren }) => {
    return (
        <>
            {p.each.map((item, index) => (
                <Fragment key={index}>{p.children(item, index)}</Fragment>
            ))}
        </>
    );
};
