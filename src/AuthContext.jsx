// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);

//     const login = async (username, password) => {
//         try {
//             const res = await fetch("http://localhost:5000/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 credentials: "include",
//                 body: JSON.stringify({ username, password }),
//             });

//             if (!res.ok) throw new Error("Login failed");

//             const data = await res.json();
//             setUser(data.user);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     const register = async (username, password) => {
//         try {
//             await fetch("http://localhost:5000/api/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ username, password }),
//             });
//         } catch (error) {
//             console.error("Registration failed:", error.message);
//         }
//     };

//     const logout = async () => {
//         await fetch("http://localhost:5000/api/logout", {
//             method: "POST",
//             credentials: "include",
//         });
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, register, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }
