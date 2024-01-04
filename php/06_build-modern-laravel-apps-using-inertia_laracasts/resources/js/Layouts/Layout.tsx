import type { FormDataConvertible } from "@inertiajs/core";

import { Link, usePage } from "@inertiajs/react";

const NavLink = (p: {
    routeName: string;
    children: TChildren;
    active?: boolean;
    method?: "get" | "post" | "patch" | "delete";
    as?: string;
    data?: Record<string, FormDataConvertible>;
}) => {
    const method = p.method || "get";
    const href = route(p.routeName);
    const active = route().current(p.routeName);

    return (
        <li>
            <Link
                href={href}
                method={method}
                as={p.as}
                className={`text-blue-500 hover:underline ${active ? "font-bold underline" : ""}`}
                data={p.data}
            >
                {p.children}
            </Link>
        </li>
    );
};

const Nav = () => {
    return (
        <nav className="">
            <ul className="flex space-x-4 items-center">
                <NavLink routeName="home">Home</NavLink>
                <NavLink routeName="users">Users</NavLink>
                <NavLink routeName="settings">Settings</NavLink>
                <NavLink routeName="xlogout" method="post" as="button" data={{ foo: "bar" }}>
                    Logout
                </NavLink>
            </ul>
        </nav>
    );
};

const Layout = (p: { children: TChildren }) => {
    const page = usePage<TProps>();
    return (
        <>
            <header className="py-6 bg-gray-200 ">
                <div className="flex justify-between items-center container mx-auto">
                    <div className="flex space-x-6 items-center">
                        <h1 contentEditable={true} className="font-bold text-lg">
                            My App
                        </h1>
                        <p className="text-sm">Welcome, {page.props.auth.user.name}</p>
                    </div>
                    <Nav />
                </div>
            </header>
            <main className="py-6 container mx-auto">{p.children}</main>
        </>
    );
};

export default Layout;
