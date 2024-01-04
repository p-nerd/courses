import { Head } from "@inertiajs/react";

const Settings = (p: TProps<{}>) => {
    return (
        <>
            {p.auth.user.name}
            <Head title="Settings Page" />
            <h1>Settings</h1>
        </>
    );
};

export default Settings;
