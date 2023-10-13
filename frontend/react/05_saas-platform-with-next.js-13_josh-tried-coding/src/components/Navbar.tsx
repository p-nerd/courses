import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import MaxWithWrapper from "./wrappers/MaxWithWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWithWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="z-40 flex font-semibold">
                        quill.
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <Link
                            href={"/"}
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            Pricing
                        </Link>
                        <LoginLink
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            Sign In
                        </LoginLink>
                        <RegisterLink
                            className={buttonVariants({ size: "sm" })}
                        >
                            <div className="flex gap-1.5">
                                Get Started
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </RegisterLink>
                    </div>
                </div>
            </MaxWithWrapper>
        </nav>
    );
};

export default Navbar;
