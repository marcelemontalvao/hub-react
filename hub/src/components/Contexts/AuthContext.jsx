import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");
            if(!token) {
                setLoading(false)
                return;
            } 
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setUser(data.techs)
                setUser(data)
                
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        loadUser()
    }, [])

    const submitFormFunction = (data) => {
        async function signIn() {
            try {
                const response = await api.post("/sessions", data)
                if(response.statusText === "OK") {
                    setUser(response.data.user)
                    localStorage.setItem("@USERID", response.data.user.id)
                    localStorage.setItem("@TOKEN", response.data.token)
                    navigate("/dashboard") 
                }
            } catch (error) {
                console.log("Erro: " + error)
            }
        }
        signIn()
    }

    return (
        <AuthContext.Provider value={{ submitFormFunction, user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
} 