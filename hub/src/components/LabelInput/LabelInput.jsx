import { LabelInputStyles } from "./LabelInputStyles.js"

const LabelInput = ({text, id, register, errors, value,...rest}) => {
    return (
        <LabelInputStyles>
            <p>{text}</p>
            <input id={id} {...register} value={value} {...rest}  />
            {errors}
        </LabelInputStyles>
    )
}

export default LabelInput;