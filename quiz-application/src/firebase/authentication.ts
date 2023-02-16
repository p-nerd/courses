import { signOut } from "firebase/auth";
import { auth } from "./setup";

export const logout = () => {
    signOut(auth);
};
