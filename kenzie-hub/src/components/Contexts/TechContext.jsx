import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
const TechContext = createContext();

export const TechProvider = ({children}) => {
    const [modalOne, setModalOne] = useState(false)
    const [modalTwo, setModalTwo] = useState(false)
    const [techOpen, setTechOpen] = useState(null)
    const [techs, setTechs] = useState([])
    const token = localStorage.getItem("@TOKEN")
   
    const submitCreateTechForm = async (data) => {
        try {
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response.statusText === "Created") {
                setModalOne(false)
            }

        } catch (error) {
            console.log("Erro: " + error)
        }
    }

    const submitPutTechForm = (data) => {
        console.log(data)
        async function putTech() {
            try {
                const response = await api.put(`/users/techs/${techOpen.id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response)
                if(response.statusText === "Created") {
                    setModalTwo(false)
                }
            } catch (error) {
                console.log("Erro: " + error)
            }
        }
       putTech()
    }


    const containerModalOne = { 
        overlay: {
            backgroundColor: "rgba(0,0,0, 0.8)",
        }
    }

    const containerModalTwo = { 
        overlay: {
            backgroundColor: "rgba(0,0,0, 0.8)",
        }
    }

    return (
        <TechContext.Provider value={{ submitCreateTechForm, submitPutTechForm, modalOne, setModalOne, containerModalOne , modalTwo, setModalTwo, containerModalTwo, techOpen, setTechOpen, techs, setTechs }}>
            {children}
        </TechContext.Provider>
    )
}   

export default TechContext;