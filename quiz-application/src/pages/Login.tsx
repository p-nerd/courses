import { FC } from "react";
import { Helmet } from "react-helmet-async";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Quiz Application</title>
            </Helmet>
            <div className="container">
                <h1>Login to your account</h1>
                <div className="column">
                    <div className="illustration">
                        <img src="/images/login.svg" alt="Login" />
                    </div>
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default Login;
