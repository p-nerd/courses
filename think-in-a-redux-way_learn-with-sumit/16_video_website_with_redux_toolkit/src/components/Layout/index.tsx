import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
