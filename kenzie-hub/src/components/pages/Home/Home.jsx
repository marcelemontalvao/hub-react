import logo from "../../../assets/Logo.png"
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import TechContext from "../../Contexts/TechContext";
import Modal from "react-modal"
import LabelInput from "../../LabelInput/LabelInput.jsx";
import { modalTwoSchema } from "./ModalSchema.js";
import modalSchema from "./ModalSchema.js";
import { DashboardPage, FormContainer, Form, TechContainer, ModalStyles, TechsContainer } from "./HomeStyles.js"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../../services/api.js";
Modal.setAppElement("#root")

const Home = () => {
    const navigate = useNavigate()
    const { submitCreateTechForm, submitPutTechForm } = useContext(TechContext)
    const {user,setUser,loading} = useContext(AuthContext)
    const {modalOne, setModalOne, containerModalOne, modalTwo, setModalTwo, containerModalTwo, techOpen, setTechOpen } = useContext(TechContext)
    const {techs, setTechs} = useContext(TechContext)
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: modalTwo ? yupResolver(modalTwoSchema) : yupResolver(modalSchema)
    })

    useEffect(() => {
        const getUserTechs = async () => {
            try {
                const response = await api.get(`/users/${userId}`)
                if(response.statusText === "OK") {
                    setUser(response.data)
                }
            } catch (error) {
                console.log("Erro: " + error)
            }
        } 
        getUserTechs()
    }, [modalOne, modalTwo])

    const submitDeleteTechForm = (techOpen) => {
        const techsFiltered = user.techs.filter((item) => item !== techOpen)
        async function deleteTech() {
            try {
                const response = await api.delete(`/users/techs/${techOpen.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status === 204) {
                    setTechs(techsFiltered)
                    setModalTwo(false)
                }
            } catch (error) {
                console.log("Erro: " + error)
            }
        }
        deleteTech()
    }

    const logoutFunction = () => {
        setUser(undefined)
        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }

    if(loading) {
        return null;
    }

    return user ? (
        <DashboardPage>
            <header>
                <div>
                    <img src={logo} alt="" />
                    <button onClick={logoutFunction}>Sair</button>
                </div> 
            </header>
            <section>
                <div>
                    <h2>Hi, {user.name}</h2>
                    <span>{user.course_module}</span>
                </div> 
            </section>
            <section>
                <div>
                    <span>Tecnologias</span>
                    <button onClick={() => setModalOne(true)}>+</button>
                    <ModalStyles isOpen={modalOne} onRequestClose={() => setModalOne(false)} style={containerModalOne}> 
                        <FormContainer>
                            <div>
                                <span>Cadastrar Tecnologia</span>
                                <button onClick={() => setModalOne(false)}>X</button>
                            </div>
                            <Form onSubmit={handleSubmit(submitCreateTechForm)}>
                                <LabelInput text={"Nome*"} type="text" id={"title"} register={register("title")} placeholder={"Digite o nome"} errors={errors.title?.message && <p aria-label="error">{errors.title.message}</p>}/>
                                <label>
                                    <p>Selecionar status*</p>
                                    <select id="status" {...register("status")}>
                                        <option value="">Escolha um status</option>
                                        <option value="Iniciante">Iniciante</option>
                                        <option value="Intermediário">Intermediário</option>
                                        <option value="Avançado">Avançado</option>
                                    </select>
                                    {errors.status?.message && <p aria-label="error">{errors.status.message}</p>}
                                </label>
                                <button type="submit" className="first-button">Cadastrar Tecnologia</button>
                            </Form>
                        </FormContainer>
                    </ModalStyles>
                </div>
            </section>  
            <section>
                {user.techs.length > 0 
                    ? 
                        <>
                            <TechsContainer>
                                {
                                    user.techs.map((tech)=> {
                                        return (
                                            <>  
                                                <TechContainer onClick={() => {
                                                    setTechOpen(tech)
                                                    setModalTwo(true)}
                                                }>
                                                    <section>
                                                        <span>{tech.title}</span>
                                                        <p>{tech.status}</p>
                                                    </section>
                                                </TechContainer>
                                            </>
                                        )
                                    })
                                }
                            </TechsContainer>
                            {techOpen !== null ?
                                <ModalStyles isOpen={modalTwo} onRequestClose={() => setModalTwo(false)} style={containerModalTwo}> 
                                    <FormContainer>
                                         <div>
                                             <span>Tecnologia Detalhes</span>
                                             <button onClick={() => setModalTwo(false)}>X</button>
                                         </div>
                                         <Form onSubmit={handleSubmit(submitPutTechForm)}>
                                            <LabelInput text={"Nome da tecnologia"} type="text" id={"title"} value={techOpen.title} placeholder={techOpen.title} register={register("title")} errors={errors.title?.message && <p aria-label="error">{errors.title.message}</p>} disabled />
                                            <label>
                                                <p>Status</p>
                                                <select id="status" {...register("status")}>
                                                    <option value="">{techOpen.status}</option>
                                                    <option value="Iniciante">Iniciante</option>
                                                    <option value="Intermediário">Intermediário</option>
                                                    <option value="Avançado">Avançado</option>
                                                </select>
                                                {errors.status?.message && <p aria-label="error">{errors.status.message}</p>}
                                            </label>
                                            <div>
                                                <button type="submit" className="first-button">Salvar alterações</button>
                                                <button type="button" onClick={() => submitDeleteTechForm(techOpen)} className="second-button" id="delete-btn">Excluir</button>
                                            </div>
                                        </Form>
                                    </FormContainer>
                                 </ModalStyles>
                            : 
                                ""
                            }
                        </>
                    : 
                        <div>
                            <p>Não existem tecnologias cadastradas</p>
                        </div> 
                }
            </section>
        </DashboardPage>
    ) : <Navigate to="/" />
}

export default Home;