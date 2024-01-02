import { Show } from "@/components/flow";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { Center } from "@/components/style";
import FileUpload from "./FileUpload";

const Home = async () => {
    const { userId } = auth();
    const is_authenticated = !!userId;
    return (
        <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
            <Center>
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center">
                        <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                    <div className="flex mt-2">
                        <Show when={is_authenticated}>
                            <Button>Go to Chats</Button>
                        </Show>
                    </div>

                    <p className="max-w-xl mt-2 text-lg text-slate-600">
                        Join millions of students, researchers and professionals to instantly answer questions and
                        understand research with AI.
                    </p>

                    <div className="w-full mt-4">
                        <Show
                            when={is_authenticated}
                            fallback={
                                <Link href="/sign-in">
                                    <Button>
                                        Login to get Started <LogInIcon className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            }
                        >
                            <div></div>
                            <FileUpload />
                        </Show>
                    </div>
                </div>
            </Center>
        </div>
    );
};

export default Home;
