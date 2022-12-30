import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import logo from "../../../assets/Logo.png"
import { FormContainer, Form } from "./RegisterStyles";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import registerSchema from "./RegisterSchema";
import LabelInput from "../../LabelInput/LabelInput";

const Register = () => {
    const navigate = useNavigate()
    const {register, unregister, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema),
    })

    const submitFormFunction = (data) => {
        async function newUser() {
            try {
                const response = await api.post("/users", data)
                if(response.statusText === "Created") {
                    unregister("passwordConfirm")
                    navigate("/") 
                }
            } catch (error) {
                console.log("Erro: " + error)
            }
        }
        newUser()
    }

    return (
        <FormContainer>
            <div className="header">
                <img src={logo} alt="" />
                <Link to={"/"}>
                    <button>Voltar</button>
                </Link>
                
            </div>

            <Form onSubmit={handleSubmit(submitFormFunction)} noValidate>
                <div>
                    <span>Crie sua conta</span>
                    <p>Rapido e grátis, vamos nessa</p>
                </div>
                
                <LabelInput text={"Nome*"} type="text" id={"name"} register={register("name")} placeholder={"Digite aqui seu nome"} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>}/>

                <LabelInput text={"Email*"} type="email" id={"email"} register={register("email")} placeholder={"Digite aqui seu email"} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>}/>

                <LabelInput text={"Senha*"} type="password" id={"password"} register={register("password")} placeholder={"Digite sua senha"} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>}/>

                <LabelInput text={"Confirme sua senha*"} type="password" id={"passwordConfirm"} register={register("passwordConfirm")} placeholder={"Digite novamente sua senha"} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>}/>

                <LabelInput text={"Bio*"} type="text" id={"bio"} register={register("bio")} placeholder={"Fale sobre você"} errors={errors.bio?.message && <p aria-label="error">{errors.bio.message}</p>}/>

                <LabelInput text={"Contato*"} type="text" id={"contact"} register={register("contact")} placeholder={"Opção de contato"} errors={errors.contact?.message && <p aria-label="error">{errors.contact.message}</p>}/>

                <label>
                    <p>Selecionar Módulo*</p>
                    <select id="module" {...register("course_module")}>
                        <option value="">Escolha um módulo</option>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo Módulo (Frontend avançado)">Segundo Módulo (Frontend avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    {errors.course_module?.message && <p aria-label="error">{errors.course_module.message}</p>}
                </label>

                <button type="submit" className="first-button">Cadastrar</button>
            </Form>
        </FormContainer>
    )
}

export default Register;