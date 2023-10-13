import { AuthEndpoints, handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const GET = async (
    request: NextRequest,
    { params }: { params: { kindeAuth: AuthEndpoints } },
) => {
    const endpoint = params.kindeAuth;
    return handleAuth(request, endpoint);
};
