import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { },
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1') {
            console.log('call');
            setIsLoggedIn(true);
        }

    }, []);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return <AuthContext.Provider value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;