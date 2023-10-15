import { useRouter, useSearchParams } from "next/navigation";

export default () => {
    const router = useRouter();
    const query = useSearchParams();
    const origin = query.get("origin");

    return <>Callback</>;
};
