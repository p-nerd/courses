import { FC, FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase/setup";
import SubmitButton from "../components/auth/SubmitButton";
import TextInput from "../components/auth/TextInput";

const Singup: FC = () => {
    const [inputs, setInputs] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleChange = (name: string, value: string) => {
        setInputs(p => ({ ...p, [name]: value }));
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = await createUserWithEmailAndPassword(inputs.email, inputs.password);
        console.log(user);
    };
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
                    <form className="signup form" onSubmit={handleSubmit}>
                        <TextInput
                            name="name"
                            placeholder="Enter name"
                            icon="person"
                            onChange={handleChange}
                        />
                        <TextInput
                            name="email"
                            placeholder="Enter email"
                            icon="alternate_email"
                            onChange={handleChange}
                        />
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            icon="lock"
                            onChange={handleChange}
                        />
                        <TextInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            icon="lock_clock"
                            onChange={handleChange}
                        />
                        <label>
                            <input type="checkbox" />
                            <span style={{ marginLeft: 5 }}>I agree to the Terms &amp; Conditions</span>
                        </label>
                        <SubmitButton />
                        <div className="info">
                            Already have an account? <Link to="/login">Login</Link> instead.
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Singup;
