import { Center } from "@/components/style";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <Center>
            <SignIn />
        </Center>
    );
}
