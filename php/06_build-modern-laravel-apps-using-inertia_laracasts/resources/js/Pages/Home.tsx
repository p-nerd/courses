import { Head } from "@inertiajs/react";

const Home = (p: TProps<{ name: string; technologies: string[] }>) => {
    return (
        <>
            {p.auth.user.name}
            <Head title="My App" />
            <h1>Home Page</h1>
        </>
    );
};

export default Home;
