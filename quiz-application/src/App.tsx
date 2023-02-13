import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Singup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: FC = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/signup" element={<Singup />} />
                    <Route path="/login" element={<Login />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Routes>
            </main>
        </>
    );
};

export default App;
