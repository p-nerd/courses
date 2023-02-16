import { FC } from "react";
import { Helmet } from "react-helmet-async";
import SingupForm from "../components/SignupForm";

const Singup: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Signup - Quiz Application</title>
            </Helmet>
            <div className="container">
                <h1>Create an account</h1>
                <div className="column">
                    <div className="illustration">
                        <img src="/images/signup.svg" alt="Signup" />
                    </div>
                    <SingupForm />
                </div>
            </div>
        </>
    );
};

export default Singup;
