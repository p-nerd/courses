import type { ReactNode } from "react";
import { list } from "@/helpers/ui";

const MaxWithWrapper = ({
    className = "",
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={list(`mx-auto w-full max-w-screen-lg px-2.5 md:px-20`, className)}
        >
            {children}
        </div>
    );
};

export default MaxWithWrapper;
