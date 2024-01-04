import { Head, Link } from "@inertiajs/react";

const Users = (p: TProps<{ time: string }>) => {
    return (
        <>
            <Head title="Users page" />
            <h1 className="text-4xl font-bold">Users List</h1>

            <div className="mt-[800px]">
                <p>The current time is {p.time}</p>
                <Link href="/users" className="text-blue-500" preserveScroll>
                    Refresh
                </Link>
            </div>
        </>
    );
};

export default Users;
