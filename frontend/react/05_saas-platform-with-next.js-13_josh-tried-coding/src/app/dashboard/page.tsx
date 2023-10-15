import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user || !user.id) {
        return redirect("/auth-callback?origin=dashboard");
    }

    return <div>{user.email}</div>;
};
