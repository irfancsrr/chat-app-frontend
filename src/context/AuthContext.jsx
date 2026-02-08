import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const url="https://chat-app-backend-62ue.onrender.com";
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser ,url}}>{children}</AuthContext.Provider>;
};
