import type { AxiosInstance } from "axios";
import type { Config } from "ziggy-js";
import type { TUser } from "./index";
import type { ReactNode } from "react";

import ziggyRoute from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;

    type TProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
        auth: {
            user: TUser;
        };
        ziggy: Config & { location: string };
    };

    type TChildren = ReactNode | string;
}
