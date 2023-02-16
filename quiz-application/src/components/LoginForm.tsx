import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase/authentication";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

const LoginForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            setLoading(false);
            navigate("/");
        } catch (e: any) {
            console.log(e);
            setLoading(false);
            setError("Failed to login!");
        }
    };

    return (
        <form className="login form" onSubmit={handleSubmit}>
            <TextInput
                name="email"
                placeholder="Enter email"
                icon="alternate_email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <TextInput
                type="password"
                name="password"
                placeholder="Enter password"
                icon="lock"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <SubmitButton loading={loading} />
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </form>
    );
};

export default LoginForm;
