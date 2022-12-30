import * as yup from "yup"

const modalSchema = yup.object().shape({
    title: yup
            .string()
            .required("O nome é obrigatório.")
            .min(1, "O nome deve ter pelo menos 1 caractere!")
            .max(200, "O nome deve ter no máximo 200 caracteres!"),
    status: yup
                .string()
                .required("O módulo é obrigatório."),
})

export const modalTwoSchema = yup.object().shape({
    status: yup.string().required("O status é obrigatório.")
})
export default modalSchema;

