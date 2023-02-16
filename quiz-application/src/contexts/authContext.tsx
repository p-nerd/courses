import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { DBUser, readUserByUID } from "../firebase/database";
import { auth } from "../firebase/setup";

interface CurrentUser extends DBUser {
    auth: User;
}

type AuthContextType = {
    currentUser: CurrentUser | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null, loading: true });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            if (user) {
                const data = await readUserByUID(user.uid);
                setCurrentUser({ auth: user, name: data.name, email: data.email, agree: data.agree });
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return () => {
            console.log("Unsubscribe triggered on onAuthStateChanged");
            unsubscribe();
        };
    }, []);

    const value = {
        loading,
        currentUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
