import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import logo from "../../../assets/Logo.png"
import { FormContainer, Form } from "./LoginStyles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LabelInput from "../../LabelInput/LabelInput";
import loginSchema from "./LoginSchema";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
    const {submitFormFunction} = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema),
    })

    return (
        <FormContainer>
            <img src={logo} alt="" />
            <Form onSubmit={handleSubmit(submitFormFunction)} noValidate>
                <span>Login</span>
                
                <LabelInput text={"Email*"} type="email" id={"email"} register={register("email")} placeholder={"Digite aqui seu email"} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>}/>

                <LabelInput text={"Senha*"} type="password" id={"password"} register={register("password")} placeholder={"Digite sua senha"} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>}/>
                <button type="submit" className="first-button">Entrar</button>

                <Link to={"/register"}>
                    <a href="/register">Ainda não possui uma conta?</a>
                </Link>

                <Link to={"/register"}>
                    <button  className="second-button">Cadastre-se</button>
                </Link>
            </Form>
        </FormContainer>
    )
    
}

export default Login;