import type { FC } from "react";
import { useAuth } from "../contexts/authContext";

const Home: FC = () => {
    const { loading, currentUser } = useAuth();

    return (
        <div>
            <div>{loading && <p>Loading ...</p>}</div>
            <div>{JSON.stringify(currentUser)}</div>
        </div>
    );
};

export default Home;
