import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Singup from "./pages/Signup";

const App: FC = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/signup" element={<Singup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
